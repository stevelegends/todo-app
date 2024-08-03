// store
import {realm} from 'src/store/realm';
import {TodoSchemeName} from 'src/store/todo/todo.scheme';

// type
import type {Todo} from 'src/store/todo/type';

class TodoService {
  public getTodo(): Array<Todo> {
    try {
      const data = realm.objects(TodoSchemeName);
      return JSON.parse(JSON.stringify(data));
    } catch (e) {
      return [];
    }
  }

  public addTodo(todo: Todo) {
    realm.write(() => {
      realm.create(TodoSchemeName, todo);
    });
  }

  public updateCompleteTodo(id: string) {
    const item = realm.objectForPrimaryKey(TodoSchemeName, id);
    if (item) {
      realm.write(() => {
        item.isComplete = !item.isComplete;
        item.updatedAt = new Date();
      });
    }
  }

  public deleteTodo(id: string) {
    realm.write(() => {
      const deleteItem = realm.objectForPrimaryKey(TodoSchemeName, id);
      if (deleteItem) {
        realm.delete(deleteItem);
      }
    });
  }
}

export const todoService = Object.freeze(new TodoService());
