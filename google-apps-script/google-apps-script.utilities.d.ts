/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module Utilities {
    /**
     * A typesafe enum for character sets.
     */
    export enum Charset { US_ASCII, UTF_8 }

    /**
     * Selector of Digest algorithm
     */
    export enum DigestAlgorithm { MD2, MD5, SHA_1, SHA_256, SHA_384, SHA_512 }

    /**
     * Selector of MAC algorithm
     */
    export enum MacAlgorithm { HMAC_MD5, HMAC_SHA_1, HMAC_SHA_256, HMAC_SHA_384, HMAC_SHA_512 }

    /**
     * This service provides utilities for string encoding/decoding, date formatting, JSON manipulation,
     *  and other miscellaneous tasks.
     */
    export interface Utilities {
      Charset: Charset
      DigestAlgorithm: DigestAlgorithm
      MacAlgorithm: MacAlgorithm
      base64Decode(encoded: String): Byte[];
      base64Decode(encoded: String, charset: Charset): Byte[];
      base64DecodeWebSafe(encoded: String): Byte[];
      base64DecodeWebSafe(encoded: String, charset: Charset): Byte[];
      base64Encode(data: Byte[]): String;
      base64Encode(data: String): String;
      base64Encode(data: String, charset: Charset): String;
      base64EncodeWebSafe(data: Byte[]): String;
      base64EncodeWebSafe(data: String): String;
      base64EncodeWebSafe(data: String, charset: Charset): String;
      computeDigest(algorithm: DigestAlgorithm, value: String): Byte[];
      computeDigest(algorithm: DigestAlgorithm, value: String, charset: Charset): Byte[];
      computeHmacSha256Signature(value: String, key: String): Byte[];
      computeHmacSha256Signature(value: String, key: String, charset: Charset): Byte[];
      computeHmacSignature(algorithm: MacAlgorithm, value: String, key: String): Byte[];
      computeHmacSignature(algorithm: MacAlgorithm, value: String, key: String, charset: Charset): Byte[];
      computeRsaSha256Signature(value: String, key: String): Byte[];
      computeRsaSha256Signature(value: String, key: String, charset: Charset): Byte[];
      formatDate(date: Date, timeZone: String, format: String): String;
      formatString(template: String, ...args: Object[]): String;
      newBlob(data: Byte[]): Base.Blob;
      newBlob(data: Byte[], contentType: String): Base.Blob;
      newBlob(data: Byte[], contentType: String, name: String): Base.Blob;
      newBlob(data: String): Base.Blob;
      newBlob(data: String, contentType: String): Base.Blob;
      newBlob(data: String, contentType: String, name: String): Base.Blob;
      parseCsv(csv: String): String[][];
      parseCsv(csv: String, delimiter: Char): String[][];
      sleep(milliseconds: Integer): void;
      unzip(blob: Base.BlobSource): Base.Blob[];
      zip(blobs: Base.BlobSource[]): Base.Blob;
      zip(blobs: Base.BlobSource[], name: String): Base.Blob;
      jsonParse(jsonString: String): Object;
      jsonStringify(obj: Object): String;
    }

  }
}

declare var Charset: GoogleAppsScript.Utilities.Charset;
declare var DigestAlgorithm: GoogleAppsScript.Utilities.DigestAlgorithm;
declare var MacAlgorithm: GoogleAppsScript.Utilities.MacAlgorithm;
declare var Utilities: GoogleAppsScript.Utilities.Utilities;