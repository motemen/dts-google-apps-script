/// <reference path="google-apps-script.types.d.ts" />

declare module GoogleAppsScript {
  export module Language {
    /**
     * The Language service provides scripts a way to compute automatic translations of text.
     * 
     *      // The code below will write "Esta es una prueba" to the log.
     *      var spanish = LanguageApp.translate('This is a test', 'en', 'es');
     *      Logger.log(spanish);
     */
    export interface LanguageApp {
      translate(text: String, sourceLanguage: String, targetLanguage: String): String;
      translate(text: String, sourceLanguage: String, targetLanguage: String, advancedArgs: Object): String;
    }

  }
}

declare var LanguageApp: GoogleAppsScript.Language.LanguageApp;