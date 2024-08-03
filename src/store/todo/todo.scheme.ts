import Realm from 'realm';

export class TodoScheme extends Realm.Object {
  _id!: string;
  title!: string;
  description!: string;
  isComplete: boolean = false;
  createdAt!: Date;
  updatedAt!: Date;

  static schema = {
    name: 'Todo' + __DEV__ ? 'Dev' : 'Prod',
    primaryKey: '_id',
    properties: {
      _id: 'string',
      title: 'string',
      description: 'string',
      isComplete: {type: 'bool', default: false},
      createdAt: 'date',
      updatedAt: 'date',
    },
  };
}

export const TodoSchemeName = TodoScheme.schema.name;
