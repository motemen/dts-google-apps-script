'use strict';

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import co from 'co';
import * as cheerio from 'cheerio';
import * as URL from 'url';

const CONCURRENCY = 4;
const MIN_WAIT = 1 * 1000;

interface INode {
  name: string;
  doc: string;
}

interface IType {
  name: string;
  category: string;
}

interface IProperty extends INode {
  type: IType;
}

interface IMethod extends INode {
  params: IProperty[];
  returnType: IType;
}

interface IDecl extends INode {
  kind: string;
  url: string;
  properties: IProperty[];
  methods: IMethod[];
}

interface ICategory {
  name?: string;
  decls: {
    [key: string]: IDecl;
  };
}
interface ICategories {
  [key: string]: ICategory;
}

class Scraper {
  static categories: ICategories = {};
  static queue: string[] = [];
  static services: any = {};
  // tslint:disable-next-line: variable-name
  private static _queueued: any = {};

  static enqueue(url: string) {
    // tslint:disable-next-line: no-parameter-reassignment
    url = url.replace(/#.*/, '').replace(/\.html$/, '');

    if (url in this._queueued) return;
    this._queueued[url] = true;

    console.error(`<-- <${url}>`);

    this.queue.push(url);
  }
}

const categoryFromUrl = (url: string) => {
  const m = url && url.match(/^https:\/\/developers\.google\.com\/apps-script\/reference\/([^/]+)/);
  //  const m = url && url.match(/^https:\/\/developers\.google\.com\/apps-script\/advanced\/([^/]+)/);

  return m ? m[1] : null;
};

const matchClassEnumInterfaceHeading = ($: CheerioStatic) => {
  return $('h1')
    .text()
    .match(/(Class|Enum|Interface) ([a-zA-Z0-9_.]+)/);
};

const matchServiceHeading = ($: CheerioStatic) => {
  return $('h1')
    .text()
    .match(/^\s*(.+) Service/);
};

const getDoc = ($: CheerioStatic) => {
  return $('.type.doc')
    .children()
    .filter(function(this: Cheerio) {
      return $(this).css('display') !== 'none';
    })
    .map(function(this: Cheerio) {
      if ($(this).is('pre')) {
        // indent code part
        return `\n${$(this)
          .text()
          .split(/\n/)
          .map((line) => `    ${line}`)
          .join('\n')}\n\n`;
      }
      return $(this).text();
    })
    .toArray()
    .join('\n');
};

const resolveHref = (link: Cheerio, url: string) => {
  const href = link.attr('href');

  return href ? URL.resolve(url, href) : undefined;
};

const createProperty = (cells: Cheerio, typeHref: string) => {
  return <IProperty>{
    name: cells.eq(0).text(),
    doc: cells.eq(2).text(),
    type: {
      name: cells.eq(1).text(),
      category: categoryFromUrl(typeHref),
    },
  };
};

const addPropertiesToDecl = ($: CheerioStatic, decl: IDecl, url: string) => {
  $('table.members.property tr:not(:first-child)').each(function(this: Cheerio) {
    const cells = $(this).find('td');
    if (cells.length === 3) {
      const type = cells.eq(1);
      const typeHref = resolveHref(type.find('a'), url);

      if (typeHref) {
        Scraper.enqueue(typeHref);
      }

      decl.properties.push(createProperty(cells, <string>typeHref));
    }
  });
};

const createMethod = (cells: Cheerio, typeHref: string) => {
  return <IMethod>{
    name: cells
      .eq(0)
      .text()
      .replace(/\(.*$/, ''),
    doc: cells.eq(2).text(),
    params: [],
    returnType: {
      name: cells.eq(1).text(),
      category: categoryFromUrl(typeHref),
    },
  };
};

const getMethod = ($: CheerioStatic, cells: Cheerio, typeHref: string, url: string) => {
  const detailId = cells
    .eq(0)
    .find('a')
    .attr('href')
    .substring(1);
  const method = createMethod(cells, typeHref);

  $('*[id]')
    .filter(function(this: Cheerio) {
      return $(this).attr('id') === detailId;
    })
    .find('table.function.param tr:not(:first-child)')
    .each(function(this: Cheerio) {
      const cells = $(this).find('td');
      if (cells.length === 3) {
        const type = cells.eq(1);
        const typeHref = resolveHref(type.find('a'), url);

        if (typeHref) {
          Scraper.enqueue(typeHref);
        }

        method.params.push(createProperty(cells, <string>typeHref));
      }
    });

  return method;
};

const addMethodsToDecl = ($: CheerioStatic, decl: IDecl, url: string) => {
  $('table.members.function tr:not(:first-child)').each(function(this: Cheerio) {
    const cells = $(this).find('td');
    if (cells.length === 3) {
      const type = cells.eq(1);
      const typeHref = resolveHref(type.find('a'), url);

      if (typeHref) {
        Scraper.enqueue(typeHref);
      }

      decl.methods.push(getMethod($, cells, <string>typeHref, url));
    }
  });
};

const createDecl = ($: CheerioStatic, matchHeading: RegExpMatchArray, url: string) => {
  return <IDecl>{
    url,
    doc: getDoc($),
    kind: matchHeading[1].toLowerCase(),
    name: matchHeading[2],
    properties: [],
    methods: [],
  };
};

function visit(url: string) {
  const name = categoryFromUrl(url);

  if (name) {
    const categories = Scraper.categories;
    categories[name] = categories[name] || { decls: {} };
    const category = categories[name];

    console.error(`==> ${url}`);

    const config: AxiosRequestConfig = {
      url,
      // method: 'get',
      // baseURL: '',
      // responseType: 'document',
      // transformResponse: (data, headers) => {
      //   return data;
      // }
    };

    return axios(config).then((response: AxiosResponse<string>) => {
      const $ = cheerio.load(response.data);

      let matchHeading: RegExpMatchArray | null = matchClassEnumInterfaceHeading($);
      if (matchHeading) {
        const decl: IDecl = createDecl($, matchHeading, url);

        addPropertiesToDecl($, decl, url);
        addMethodsToDecl($, decl, url);
        category.decls[decl.name] = decl;
      } else {
        matchHeading = matchServiceHeading($);
        if (matchHeading) {
          category.name = matchHeading[1];
        } else {
          console.error(`!!! unexpected heading: ${$('h1').text()}`);
        }
      }
    });
  }

  return;
}

co(function*() {
  const startURL = 'https://developers.google.com/apps-script/reference/';

  const config: AxiosRequestConfig = {
    url: startURL,
    // method: 'get',
    // baseURL: '',
    // responseType: 'document',
    // transformResponse: (data, headers) => {
    //   return data;
    // }
  };
  const response: AxiosResponse = yield axios(config);
  const $ = cheerio.load(response.data);

  let inServices = true;
  $('.devsite-section-nav li li li').each(function(this: Cheerio) {
    const name = $(this).text();

    if (name === 'Classes') {
      inServices = false;
    } else {
      let url = $(this)
        .find('a[href]')
        .attr('href');
      if (url) {
        url = URL.resolve(startURL, url);

        Scraper.enqueue(url);

        if (inServices) {
          Scraper.services[url] = true;
        }

        if (name === 'Overview') {
          inServices = true;
        }
      }
    }
  });

  while (Scraper.queue.length > 0) {
    const urls: string[] = Scraper.queue.splice(0, CONCURRENCY);

    yield Promise.all(
      urls
        .map((url) => (visit(url) as unknown) as Promise<any>)
        .concat(new Promise<any>((ok) => setTimeout(ok, MIN_WAIT))),
    );
  }

  return;
})
  .then(() => {
    const result = {
      categories: Scraper.categories,
      services: Scraper.services,
    };

    console.log(JSON.stringify(result, undefined, 2));

    process.exit(0);
  })
  .catch((err) => {
    console.error(`ERR ${err}`);

    process.exit(1);
  });
