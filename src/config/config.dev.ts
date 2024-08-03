/**
 * These are configuration settings for the production environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
export default {
  schemaVersion: 1,
  realmPath: 'AppDEV',
  /** default Int8Array(64) | please create your own. */
  encryptionKey: new Int8Array(64),
};
