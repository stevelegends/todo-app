import Realm from 'realm';

// config
import Config from 'src/config';

// schema
import {TodoScheme} from './todo/todo.scheme';

/**
 * Encrypt the realm database file on disk with
 * AES-256 + SHA-2 by supplying a 64-byte
 * encryption key when opening a realm.
 * -----------------------------------
 * Realm transparently encrypts and decrypts data with
 * standard AES-256 encryption using the first 256 bits
 * of the given 512-bit encryption key.
 * Realm uses the other 256 bits of the 512-bit
 * encryption key to validate integrity using
 * a hash-based message authentication code (HMAC).
 */

export const realm = new Realm({
  schema: [TodoScheme.schema as any],
  schemaVersion: Config.schemaVersion,
  encryptionKey: Config.encryptionKey,
  path: Config.realmPath + '.realm',
});
