# dts-google-apps-script

d.ts files generator for [Google Apps Script](https://developers.google.com/apps-script/)

## How to generate `d.ts` files and update the `GoogleAppsScript` Type Definition

Scrape and generate Apps Script `d.ts` files.

```sh
# Clone this repo
node spider.js out.json # Scrape the Apps Script Reference Docs and create JSON files
cat out.json | node gen.js # Pipe the output from above into a generator. New d.ts files are written to google-apps-script/
```

Create a PR to [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) with these updated files.

## Included in DefinitelyTyped

You may want to use [definitions on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/google-apps-script) unless you want to generate d.ts files manually.
