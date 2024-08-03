import Realm from 'realm';

// config
import Config from 'src/config';

// schema
import {TodoScheme} from './todo/todo.scheme';

export const realm = new Realm({
  schema: [TodoScheme as any],
  schemaVersion: Config.schemaVersion,
});
