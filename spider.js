'use strict';

const CONCURRENCY = 4
const MIN_WAIT    = 1 * 1000

var request = require('co-request'),
    co      = require('co'),
    cheerio = require('cheerio'),
    URL     = require('url');

var Scraper = {
  categories: {},
  services: {},
  _queueued: {},
  enqueue: function (url) {
    url = url.replace(/#.*/, '').replace(/\.html$/, '');

    if (url in this._queueued) return;
    this._queueued[url] = true;

    console.error('<-- <' + url + '>');

    this.queue.push(url);
  },
  queue: []
};

function categoryFromUrl (url) {
  var m = /^https:\/\/developers\.google\.com\/apps-script\/reference\/([^/]+)/.exec(url);
  if (!m) return null;

  return m[1];
}

function* visit (url) {
  var category = categoryFromUrl(url);
  if (!category) {
    return;
  }

  if (!Scraper.categories[category]) {
    Scraper.categories[category] = {
      decls: {}
    };
  }

  console.error('==> ' + url);

  var result = yield request({
    url: url
  });

  var $ = cheerio.load(result.body);

  var headingText = $('h1').text();
  var m = headingText.match(/(Class|Enum|Interface) (\w+)/);
  if (!m) {
    var m = headingText.match(/^\s*(.+) Service/);
    if (m) {
      Scraper.categories[category].name = m[1];
    } else {
      console.error('!!! unexpected heading: ' + headingText);
    }
    return;
  }

  /// doc
  var doc = $('.type.doc').children().filter(function () {
    return $(this).css('display') !== 'none';
  }).map(function () {
    if ($(this).is('pre')) {
      // indent code part
      return '\n' + $(this).text().split(/\n/).map((line) => '    ' + line).join('\n') + '\n\n';
    } else {
      return $(this).text();
    }
  }).toArray().join('\n');

  var decl = {
    kind: m[1].toLowerCase(),
    name: m[2],
    doc: doc,
    url: url,
    properties: [],
    methods: []
  };

  function resolveHref (link) {
    var href = link.attr('href');
    if (href) {
      return URL.resolve(url, href);
    }
  }

  /// props
  $('table.members.property tr:not(:first-child)').each(function () {
    var cells = $(this).find('td');
    if (cells.length !== 3) return;

    var name = cells.eq(0),
        type = cells.eq(1),
        doc  = cells.eq(2);

    var typeHref = resolveHref(type.find('a'));
    if (typeHref) Scraper.enqueue(typeHref);

    decl.properties.push({
      name: name.text(),
      type: { name: type.text(), category: categoryFromUrl(typeHref) },
      doc:  doc.text()
    });
  });

  /// methods
  $('table.members.function tr:not(:first-child)').each(function () {
    var cells = $(this).find('td');
    if (cells.length !== 3) return;

    var name = cells.eq(0),
        type = cells.eq(1),
        doc  = cells.eq(2);

    var typeHref = resolveHref(type.find('a'));
    if (typeHref) Scraper.enqueue(typeHref);

    var method = {
      name:       name.text().replace(/\(.*$/, ''),
      returnType: { name: type.text(), category: categoryFromUrl(typeHref) },
      doc:        doc.text(),
      params:     []
    };

    var detailId = name.find('a').attr('href').substring(1);
    // $('#' + detailId) fails
    $('*[id]').filter(function () {
      return $(this).attr('id') === detailId;
    })
    .find('table.function.param tr:not(:first-child)').each(function () {
      var cells = $(this).find('td');
      if (cells.length !== 3) return;

      var name = cells.eq(0),
          type = cells.eq(1),
          doc  = cells.eq(2);

      var typeHref = resolveHref(type.find('a'));
      if (typeHref) Scraper.enqueue(typeHref);

      method.params.push({
        name: name.text(),
        type: { name: type.text(), category: categoryFromUrl(typeHref) },
        doc:  doc.text()
      });
    })

    decl.methods.push(method);
  });

  Scraper.categories[category].decls[decl.name] = decl;

  return;
}

co(function* () {
  var startURL = 'https://developers.google.com/apps-script/reference/';
  var result = yield request(startURL);
  var $ = cheerio.load(result.body);

  var inServices = true;
  $('.devsite-section-nav li li li').each(function () {
    var name = $(this).text();

    if (name === 'Classes') {
      inServices = false;
      return;
    }

    var url = $(this).find('a[href]').attr('href');
    if (!url) return;
    url = URL.resolve(startURL, url);

    if (inServices) {
      Scraper.services[url] = true;
    }
    Scraper.enqueue(url);

    if (name === 'Overview') {
      inServices = true;
    }
  });

  while (Scraper.queue.length > 0) {
    var urls = Scraper.queue.splice(0, CONCURRENCY);
    yield Promise.all(
      urls.map((url) => co(visit(url)))
        .concat(new Promise((ok) => setTimeout(ok, MIN_WAIT)))
    );
  }

  return;
}).then(function () {
  console.log(
    JSON.stringify({
      categories: Scraper.categories,
      services: Scraper.services
    }, true, 2)
  );
  process.exit(0);
}).catch(function (err) {
  console.error('ERR ' + err);
  process.exit(1);
});
