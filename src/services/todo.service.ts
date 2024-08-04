import Realm from 'realm';

// store
import {realm as realmStore} from 'src/store/realm';
import {TodoSchemeName} from 'src/store/todo/todo.scheme';

// type
import type {Todo} from 'src/store/todo/type';

export class TodoService {
  private realm: Realm;
  constructor(realm: Realm) {
    this.realm = realm;
  }
  public getTodo(): Array<Todo> {
    try {
      const data = this.realm.objects(TodoSchemeName);
      return JSON.parse(JSON.stringify(data));
    } catch (e) {
      return [];
    }
  }

  public addTodo(todo: Todo) {
    this.realm.write(() => {
      this.realm.create(TodoSchemeName, todo);
    });
  }

  public updateCompleteTodo(id: string) {
    const item = this.realm.objectForPrimaryKey(TodoSchemeName, id);
    if (item) {
      this.realm.write(() => {
        item.isComplete = !item.isComplete;
        item.updatedAt = new Date();
      });
    }
  }

  public deleteTodo(id: string) {
    this.realm.write(() => {
      const deleteItem = this.realm.objectForPrimaryKey(TodoSchemeName, id);
      if (deleteItem) {
        this.realm.delete(deleteItem);
      }
    });
  }
}

export const todoService = Object.freeze(new TodoService(realmStore));
