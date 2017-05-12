#!/usr/bin/env node --harmony

var fs = require('fs');
var header = fs.readFileSync('HEADER', { encoding: 'utf-8' })
  .replace(/{date}/, function () {
    var date = new Date();
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).substr(-2) + '-' + ('0' + date.getDate()).substr(-2)
  });

var outFiles = {};

var input = '';
process.stdin.on('data', (buf) => input += buf.toString());
process.stdin.on('end', () => {
  var data = JSON.parse(input);

  function mkDoc (doc) {
    var lines = [];
    lines.push('/**');
    doc.replace(/( *\n){3,}/g, '\n\n').replace(/\s+$/, '').split(/\n/).forEach((line) => lines.push(' * ' + line));
    lines.push(' */');
    return lines;
  }

  function indent (s) {
    return s.replace(/^./, '  $&');
  }

  Object.keys(data.categories).sort().forEach(function (cat) {
    var result = [];

    var catName = data.categories[cat].name.replace(/\W/g, '_');
    var decls = data.categories[cat].decls;
    var exports = {};

    function mkTypedName (o, isField) {
      var name = o.name,
          typeName = o.type.name,
          typeCat  = o.type.category,
          isType = false;

      if (isField === true) {
        if (data.categories[typeCat] && data.categories[typeCat].decls[typeName]) {
          if (data.categories[typeCat].decls[typeName].kind === 'enum') {
            isType = true;
          }
        }
      }

      if (typeCat && typeCat !== cat) {
        typeName = data.categories[typeCat].name.replace(/\W/g, '_') + '.' + typeName;
        if (references.indexOf(typeCat) === -1) {
          references.push(typeCat);
        }
      }

      if (/^(.+)\.\.\.$/.test(typeName)) {
        typeName = RegExp.$1 + '[]';
        name = '...' + o.name;
      }

      if (typeName === 'String' || typeName === 'Boolean') {
        typeName = typeName.toLowerCase();
      }

      return name + ': ' + (isType ? 'typeof ' : '') + typeName;
    }

    var references = [ 'types' ];
    result.push(
      'declare namespace GoogleAppsScript {',
      '  export module ' + catName + ' {'
    );

    Object.keys(decls).sort().forEach(function (name) {
      var decl = decls[name];
      if (!decl) return;

      var lines = mkDoc(decl.doc);

      var names = name.split(/\./);
      name = names.pop();
      names.forEach(function (ns) {
        lines.push('namespace ' + ns + ' {');
      });

      if (decl.kind === 'enum') {
        lines.push('export enum ' + name + ' { ' + decl.properties.map((p) => p.name).join(', ') + ' }');
      } else {
        lines.push('export interface ' + name + ' {');
        lines.push.apply(lines, decl.properties.map(p => mkTypedName(p, true) + ';').map(indent))
        lines.push.apply(lines,
          decl.methods.map((method) =>
            mkTypedName({
              name: method.name + '(' +
                  method.params.map(mkTypedName).join(', ')
                    .replace(/(\bsql:.*)\bsql:/g, '$1sql_:') + // ad-hoc fix for same-named arguments in jdbc
                ')',
              type: method.returnType
            }) + ';'
          ).map(indent)
        )
        lines.push('}');
      }

      names.forEach(function (ns) {
        lines.push('}');
      });

      lines.push('');

      if (data.services[decl.url]) {
        exports[name] = true;
      }

      result = result.concat(lines.map(indent).map(indent));
    });

    result.push(
      '  }',
      '}',
      ''
    );

    Object.keys(exports).sort().forEach(function (name) {
      var line = 'declare var ' + name + ': GoogleAppsScript.' + catName + '.' + name + ';'
      if (name === 'MimeType') {
        result.push('// conflicts with MimeType in lib.d.ts');
        result.push('// ' + line);
      } else {
        result.push(line);
      }
    });

    result = [ header ]
      .concat(references.map((ref) => '/// <reference path="google-apps-script.' + ref + '.d.ts" />'))
      .concat('', result);

    var file = 'google-apps-script/google-apps-script.' + cat + '.d.ts';
    var f = fs.openSync(file, 'w');
    fs.writeSync(f, result.join('\n').replace(/ +$/mg, '') + '\n');
    console.error('Wrote to ' + file);
  });
});
