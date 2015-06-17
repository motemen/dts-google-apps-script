/// <reference path="googleappsscript.types.d.ts" />

declare module GoogleAppsScript {
  export module Mail {
    /**
     * Sends email.
     * 
     * This service allows users to send emails with complete control over the
     *  content of the email. Unlike GmailApp, MailApp's sole purpose is sending email. MailApp cannot
     *  access a user's Gmail inbox.
     * 
     * Changes to scripts written using GmailApp are more likely to trigger a re-authorization
     *  request from a user than MailApp scripts.
     */
    export interface MailApp {
      getRemainingDailyQuota(): Integer;
      sendEmail(message: Object): void;
      sendEmail(recipient: String, subject: String, body: String): void;
      sendEmail(recipient: String, subject: String, body: String, options: Object): void;
      sendEmail(to: String, replyTo: String, subject: String, body: String): void;
    }

  }
}

declare var MailApp: GoogleAppsScript.Mail.MailApp;