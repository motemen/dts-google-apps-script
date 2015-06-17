/// <reference path="googleappsscript.types.d.ts" />

declare module GoogleAppsScript {
  export module Content {
    /**
     * An enum for mime types that can be served from a script.
     */
    export enum MimeType { ATOM, CSV, ICAL, JAVASCRIPT, JSON, RSS, TEXT, VCARD, XML }

    /**
     * Service for returning text content from a script.
     * 
     *  You can serve up text in various forms. For example, publish this script as a web app.
     * 
     *      function doGet() {
     *        return ContentService.createTextOutput("Hello World");
     *      }
     */
    export interface ContentService {
      MimeType: MimeType
      createTextOutput(): TextOutput;
      createTextOutput(content: String): TextOutput;
    }

    /**
     * A TextOutput object that can be served from a script.
     *  
     *  Due to security considerations, scripts cannot directly return text content to a browser.
     *  Instead, the browser is redirected to googleusercontent.com, which will display it without any
     *  further sanitization or manipulation.
     *  
     *  You can return text content like this:
     * 
     *      function doGet() {
     *        return ContentService.createPlainTextOutput("hello world!");
     *      }
     * 
     * ContentService
     */
    export interface TextOutput {
      append(addedContent: String): TextOutput;
      clear(): TextOutput;
      downloadAsFile(filename: String): TextOutput;
      getContent(): String;
      getFileName(): String;
      getMimeType(): MimeType;
      setContent(content: String): TextOutput;
      setMimeType(mimeType: MimeType): TextOutput;
    }

  }
}

declare var ContentService: GoogleAppsScript.Content.ContentService;