'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const co_1 = require("co");
const cheerio = require("cheerio");
const URL = require("url");
const CONCURRENCY = 4;
const MIN_WAIT = 1 * 1000;
class Scraper {
    static enqueue(url) {
        // tslint:disable-next-line: no-parameter-reassignment
        url = url.replace(/#.*/, '').replace(/\.html$/, '');
        if (url in this._queueued)
            return;
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
    return href ? URL.resolve(url, href) : undefined;
};
const createProperty = (cells, typeHref) => {
    return {
        name: cells.eq(0).text(),
        doc: cells.eq(2).text(),
        type: {
            name: cells.eq(1).text(),
            category: categoryFromUrl(typeHref),
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
            decl.properties.push(createProperty(cells, typeHref));
        }
    });
};
const createMethod = (cells, typeHref) => {
    return {
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
const getMethod = ($, cells, typeHref, url) => {
    const detailId = cells
        .eq(0)
        .find('a')
        .attr('href')
        .substring(1);
    const method = createMethod(cells, typeHref);
    $('*[id]')
        .filter(function () {
        return $(this).attr('id') === detailId;
    })
        .find('table.function.param tr:not(:first-child)')
        .each(function () {
        const cells = $(this).find('td');
        if (cells.length === 3) {
            const type = cells.eq(1);
            const typeHref = resolveHref(type.find('a'), url);
            if (typeHref) {
                Scraper.enqueue(typeHref);
            }
            method.params.push(createProperty(cells, typeHref));
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
        url,
        doc: getDoc($),
        kind: matchHeading[1].toLowerCase(),
        name: matchHeading[2],
        properties: [],
        methods: [],
    };
};
function visit(url) {
    const name = categoryFromUrl(url);
    if (name) {
        const categories = Scraper.categories;
        categories[name] = categories[name] || { decls: {} };
        const category = categories[name];
        console.error(`==> ${url}`);
        const config = {
            url,
        };
        return axios_1.default(config).then((response) => {
            const $ = cheerio.load(response.data);
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
co_1.default(function* () {
    const startURL = 'https://developers.google.com/apps-script/reference/';
    const config = {
        url: startURL,
    };
    const response = yield axios_1.default(config);
    const $ = cheerio.load(response.data);
    let inServices = true;
    $('.devsite-section-nav li li li').each(function () {
        const name = $(this).text();
        if (name === 'Classes') {
            inServices = false;
        }
        else {
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
