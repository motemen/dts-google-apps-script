# dts-google-apps-script

A [`d.ts`](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html) files generator for [Google Apps Script](https://developers.google.com/apps-script/).

## How to generate `d.ts` files and update the `GoogleAppsScript` Type Definition

1. Scrape and generate Apps Script `d.ts` files.

```sh
git clone git@github.com:motemen/dts-google-apps-script.git
node spider.js >> out.json # Scrape the Apps Script Reference Docs and create JSON files
cat out.json | node gen.js # Pipe the output from above into a generator. New d.ts files are written to google-apps-script/
```

2. Create a PR to [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) with these updated files.
3. Wait for the DefinitelyTyped reviewers to merge your PR and update the [@types/google-apps-script](https://www.npmjs.com/package/@types/google-apps-script) repo.

## Included in DefinitelyTyped

You may want to use [definitions on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/google-apps-script) unless you want to generate d.ts files manually.
