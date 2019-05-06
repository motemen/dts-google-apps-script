#!/usr/bin/env node --harmony
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const header = fs.readFileSync('HEADER', { encoding: 'utf-8' }).replace(/{date}/, () => {
    const date = new Date();
    return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.substr(-2)}-${`0${date.getDate()}`.substr(-2)}`;
});
let input = '';
process.stdin.on('data', (buf) => (input += buf.toString()));
process.stdin.on('end', () => {
    const data = JSON.parse(input);
    const makeDocComment = (docComment) => {
        const lines = [];
        lines.push('/**');
        docComment
            .replace(/( *\n){3,}/g, '\n\n')
            .replace(/\s+$/, '')
            .split(/\n/)
            .forEach((line) => lines.push(` * ${line}`));
        lines.push(' */');
        return lines;
    };
    const indent = (text) => text.replace(/^./, '  $&');
    Object.keys(data.categories)
        .sort()
        .forEach((key) => {
        let result = [];
        const exports = {};
        const category = data.categories[key];
        const categoryName = category.name.replace(/\W/g, '_');
        const decls = category.decls;
        let references;
        const makeTypedName = (o, isField) => {
            let name = o.name;
            let typeName = o.type.name;
            const typeCategory = o.type.category;
            const dataCategory = data.categories[typeCategory];
            const typeIsEnum = isField === true &&
                dataCategory &&
                dataCategory.decls[typeName] &&
                dataCategory.decls[typeName].kind === 'enum';
            if (typeCategory && typeCategory !== key) {
                typeName = `${dataCategory.name.replace(/\W/g, '_')}.${typeName}`;
                if (references.indexOf(typeCategory) === -1) {
                    references.push(typeCategory);
                }
            }
            if (/^(.+)\.\.\.$/.test(typeName)) {
                typeName = `${RegExp.$1}[]`;
                name = `...${o.name}`;
            }
            if (typeName.match(/^(String|Boolean)\W*$/)) {
                typeName = typeName.toLowerCase();
            }
            return `${name}: ${typeIsEnum ? 'typeof ' : ''}${typeName}`;
        };
        references = ['types'];
        result.push('declare namespace GoogleAppsScript {', `  export module ${categoryName} {`);
        Object.keys(decls)
            .sort()
            .forEach((key) => {
            const decl = decls[key];
            if (decl) {
                const lines = makeDocComment(decl.doc);
                const names = key.split(/\./);
                const name = names.pop();
                names.forEach((ns) => lines.push(`namespace ${ns} {`));
                if (decl.kind === 'enum') {
                    lines.push(`export enum ${name} { ${decl.properties.map((p) => p.name).join(', ')} }`);
                }
                else {
                    lines.push(`export interface ${name} {`);
                    lines.push(...decl.properties.map((p) => `${makeTypedName(p, true)};`).map(indent));
                    lines.push(...decl.methods
                        .map((method) => `${makeTypedName({
                        name: `${method.name}(${method.params
                            .map(makeTypedName)
                            .join(', ')
                            .replace(/(\bsql:.*)\bsql:/g, '$1sql_:') // ad-hoc fix for same-named arguments in jdbc
                        })`,
                        type: method.returnType,
                    })};`)
                        .map(indent));
                    lines.push('}');
                }
                names.forEach(() => lines.push('}'));
                lines.push('');
                if (data.services[decl.url]) {
                    exports[name] = true;
                }
                result = result.concat(lines.map(indent).map(indent));
            }
        });
        result.push('  }', '}', '');
        Object.keys(exports)
            .sort()
            .forEach((key) => {
            const line = `declare var ${key}: GoogleAppsScript.${categoryName}.${key};`;
            if (key === 'MimeType') {
                result.push('// conflicts with MimeType in lib.d.ts');
                result.push(`// ${line}`);
            }
            else {
                result.push(line);
            }
        });
        result = [header]
            .concat(references.map((ref) => `/// <reference path="google-apps-script.${ref}.d.ts" />`))
            .concat('', result);
        const filename = `google-apps-script/google-apps-script.${key}.d.ts`;
        const fd = fs.openSync(filename, 'w');
        fs.writeSync(fd, `${result.join('\n').replace(/ +$/gm, '')}\n`);
        console.error(`Wrote to ${filename}`);
    });
});
