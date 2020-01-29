// tslint:disable: no-console
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const co_1 = __importDefault(require("co"));
const url_1 = __importDefault(require("url"));
const CONCURRENCY = 4;
const MIN_WAIT = 1 * 1000;
class Scraper {
    static enqueue(url) {
        // tslint:disable-next-line: no-parameter-reassignment
        url = url.replace(/#.*/, '').replace(/\.html$/, '');
        if (url in this._queueued) {
            return;
        }
        this._queueued[url] = true;
        console.error(`<-- <${url}>`);
        this.queue.push(url);
    }
}
Scraper.categories = {};
Scraper.queue = [];
Scraper.services = {};
// tslint:disable-next-line: variable-name
Scraper._queueued = {};
const categoryFromUrl = (url) => {
    const m = url && url.match(/^https:\/\/developers\.google\.com\/apps-script\/reference\/([^/]+)/);
    //  const m = url && url.match(/^https:\/\/developers\.google\.com\/apps-script\/advanced\/([^/]+)/);
    return m ? m[1] : null;
};
const matchClassEnumInterfaceHeading = ($) => {
    return $('h1')
        .text()
        .match(/(Class|Enum|Interface) ([a-zA-Z0-9_.]+)/);
};
const matchServiceHeading = ($) => {
    return $('h1')
        .text()
        .match(/^\s*(.+) Service/);
};
const getDoc = ($) => {
    return $('.type.doc')
        .children()
        .filter(function () {
        return $(this).css('display') !== 'none';
    })
        .map(function () {
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
const resolveHref = (link, url) => {
    const href = link.attr('href');
    return href ? url_1.default.resolve(url, href) : undefined;
};
const createProperty = ($, cells, typeHref) => {
    const propertyName = cells.eq(0);
    const isDeprecated = $(propertyName)
        .find('s')
        .text().length > 0;
    return {
        doc: cells.eq(2).text(),
        isDeprecated,
        name: cells.eq(0).text(),
        type: {
            category: categoryFromUrl(typeHref),
            name: cells.eq(1).text(),
        },
    };
};
const addPropertiesToDecl = ($, decl, url) => {
    $('table.members.property tr:not(:first-child)').each(function () {
        const cells = $(this).find('td');
        if (cells.length === 3) {
            const type = cells.eq(1);
            const typeHref = resolveHref(type.find('a'), url);
            if (typeHref) {
                Scraper.enqueue(typeHref);
            }
            decl.properties.push(createProperty($, cells, typeHref));
        }
    });
};
const createMethod = ($, cells, typeHref, methodUrl) => {
    const methodName = cells.eq(0);
    const isDeprecated = $(methodName)
        .find('s')
        .text().length > 0;
    return {
        doc: cells.eq(2).text(),
        docDetailed: '',
        url: methodUrl,
        isDeprecated,
        name: cells
            .eq(0)
            .text()
            .replace(/\(.*$/, ''),
        params: [],
        returnType: {
            category: categoryFromUrl(typeHref),
            name: cells.eq(1).text(),
        },
    };
};
const getMethod = ($, cells, typeHref, url) => {
    const detailId = cells
        .eq(0)
        .find('a')
        .attr('href')
        .substring(1);
    const method = createMethod($, cells, typeHref, `${url}#${detailId}`);
    const methodSection = $('*[id]')
        .filter(function () {
        return $(this).attr('id') === detailId;
    });
    const detailedDocsLines = [];
    methodSection
        .children('div')
        .children()
        .each(function () {
        if ($(this).is('p')) {
            detailedDocsLines.push($(this).text());
        }
        else if ($(this).is('pre')) {
            // indent code part
            detailedDocsLines.push(`${$(this)
                .text()
                .split(/\n/)
                .map((line) => `    ${line}`)
                .join('\n')}`);
        }
        else {
            return false;
        }
    });
    if (detailedDocsLines.length)
        method.docDetailed = detailedDocsLines.join('\n');
    methodSection.find('table.function.param tr:not(:first-child)').each(function () {
        const paramCells = $(this).find('td');
        if (paramCells.length === 3) {
            const type = paramCells.eq(1);
            const paramTypeHref = resolveHref(type.find('a'), url);
            if (paramTypeHref) {
                Scraper.enqueue(paramTypeHref);
            }
            method.params.push(createProperty($, paramCells, paramTypeHref));
        }
    });
    return method;
};
const addMethodsToDecl = ($, decl, url) => {
    $('table.members.function tr:not(:first-child)').each(function () {
        const cells = $(this).find('td');
        if (cells.length === 3) {
            const type = cells.eq(1);
            const typeHref = resolveHref(type.find('a'), url);
            if (typeHref) {
                Scraper.enqueue(typeHref);
            }
            decl.methods.push(getMethod($, cells, typeHref, url));
        }
    });
};
const createDecl = ($, matchHeading, url) => {
    return {
        doc: getDoc($),
        isDeprecated: false,
        kind: matchHeading[1].toLowerCase(),
        methods: [],
        name: matchHeading[2],
        properties: [],
        url,
    };
};
function visit(url) {
    const name = categoryFromUrl(url);
    if (name) {
        const categories = Scraper.categories;
        categories[name] = categories[name] || { decls: {}, debugUrl: url, debugName: name };
        // categories[name] = categories[name] || { decls: {} };
        const category = categories[name];
        console.error(`==> ${url}`);
        const config = {
            url,
        };
        return axios_1.default(config).then((response) => {
            const $ = cheerio_1.default.load(response.data);
            let matchHeading = matchClassEnumInterfaceHeading($);
            if (matchHeading) {
                const decl = createDecl($, matchHeading, url);
                addPropertiesToDecl($, decl, url);
                addMethodsToDecl($, decl, url);
                category.decls[decl.name] = decl;
            }
            else {
                matchHeading = matchServiceHeading($);
                if (matchHeading) {
                    category.name = matchHeading[1];
                }
                else {
                    console.error(`!!! unexpected heading: ${$('h1').text()}`);
                }
            }
        });
    }
    return;
}
/*
Argument of type '
() => Generator<AxiosPromise<any> | Promise<any[]>, void, AxiosResponse<any>>
' is not assignable to parameter of type '
(...args: any[]) => Iterator<any, any, undefined>
'.
  Type 'Generator<AxiosPromise<any> | Promise<any[]>, void, AxiosResponse<any>>' is not assignable to type 'Iterator<any, any, undefined>'.
    Types of property 'next' are incompatible.
      Type '(...args: [] | [AxiosResponse<any>]) => IteratorResult<AxiosPromise<any> | Promise<any[]>, void>' is not assignable to type '(...args: [] | [undefined]) => IteratorResult<any, any>'.
        Types of parameters 'args' and 'args' are incompatible.
          Type '[] | [undefined]' is not assignable to type '[] | [AxiosResponse<any>]'.
            Type '[undefined]' is not assignable to type '[] | [AxiosResponse<any>]'.
              Type '[undefined]' is not assignable to type '[AxiosResponse<any>]'.
                Type 'undefined' is not assignable to type 'AxiosResponse<any>'.
*/
co_1.default(function* () {
    const startURL = 'https://developers.google.com/apps-script/reference/';
    const config = {
        url: startURL,
    };
    const response = yield axios_1.default(config);
    const $ = cheerio_1.default.load(response.data);
    let inServices = true;
    const selector = 'ul.devsite-nav-section li.devsite-nav-item ul li.devsite-nav-item';
    $(selector).each(function () {
        const name = $(this).text();
        if (name === 'Classes') {
            inServices = false;
        }
        else {
            let url = $(this)
                .find('a[href]')
                .attr('href');
            if (url) {
                url = url_1.default.resolve(startURL, url);
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
        const urls = Scraper.queue.splice(0, CONCURRENCY);
        yield Promise.all(urls
            .map((url) => visit(url))
            .concat(new Promise((ok) => setTimeout(ok, MIN_WAIT))));
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
