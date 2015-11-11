/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module URL_Fetch {
    /**
     * This class allows users to access specific information on HTTP responses.
     * See also
     * 
     * UrlFetchApp
     */
    export interface HTTPResponse {
      getAllHeaders(): Object;
      getAs(contentType: String): Base.Blob;
      getBlob(): Base.Blob;
      getContent(): Byte[];
      getContentText(): String;
      getContentText(charset: String): String;
      getHeaders(): Object;
      getResponseCode(): Integer;
    }

    /**
     * 
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * Represents configuration settings for an OAuth-enabled remote service.
     * See also
     * 
     * UrlFetchApp
     */
    export interface OAuthConfig {
      getAccessTokenUrl(): String;
      getAuthorizationUrl(): String;
      getMethod(): String;
      getParamLocation(): String;
      getRequestTokenUrl(): String;
      getServiceName(): String;
      setAccessTokenUrl(url: String): void;
      setAuthorizationUrl(url: String): void;
      setConsumerKey(consumerKey: String): void;
      setConsumerSecret(consumerSecret: String): void;
      setMethod(method: String): void;
      setParamLocation(location: String): void;
      setRequestTokenUrl(url: String): void;
    }

    /**
     * Fetch resources and communicate with other hosts over the Internet.
     * 
     *  This service allows scripts to communicate with other applications or access other resources on
     *  the web by fetching URLs. A script can use the URL Fetch service to issue HTTP and HTTPS requests
     *  and receive responses. The URL Fetch service uses Google's network infrastructure for efficiency
     *  and scaling purposes.
     * See also
     * 
     * OAuthConfig
     * 
     * HTTPResponse
     */
    export interface UrlFetchApp {
      fetch(url: String): HTTPResponse;
      fetch(url: String, params: Object): HTTPResponse;
      getRequest(url: String): Object;
      getRequest(url: String, params: Object): Object;
      addOAuthService(serviceName: String): OAuthConfig;
      removeOAuthService(serviceName: String): void;
    }

  }
}

declare var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp;