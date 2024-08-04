import Realm from 'realm';

// scheme
import {TodoScheme} from 'src/store/todo/todo.scheme';

// services
import {TodoService} from 'src/services/todo.service';

describe('TodoService', () => {
  let realm: Realm;
  let todoService: TodoService;

  const config = {
    schema: [TodoScheme.schema],
    path: 'todo-testing.realm',
  };

  beforeEach(async () => {
    realm = await Realm.open(config as any);
    todoService = new TodoService(realm);
  });

  afterEach(() => {
    if (!realm.isClosed) {
      realm.close();
    }
    if (config) {
      Realm.deleteFile(config as any);
    }
  });

  afterAll(done => {
    done();
  });

  test('Get Todo', () => {
    const todos = todoService.getTodo();
    expect(todos).toEqual([]);
  });

  test('Add Todo', () => {
    todoService.addTodo({
      _id: '1',
      title: 'Test Todo',
      description: 'Test Description',
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const todos = todoService.getTodo();
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Test Todo');
  });

  test('Update Complete Todo', () => {
    todoService.addTodo({
      _id: '2',
      title: 'Test Todo',
      description: 'Test Todo',
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    todoService.updateCompleteTodo('2');
    const todos = todoService.getTodo();
    expect(todos[0].isComplete).toBe(true);
  });

  test('Delete Todo', () => {
    todoService.addTodo({
      _id: '3',
      title: 'Test Todo',
      description: 'Test Todo',
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    todoService.deleteTodo('3');
    const todos = todoService.getTodo();
    expect(todos.length).toBe(0);
  });

  test('Close a Realm', async () => {
    expect(realm.isClosed).toBe(false);
    realm.close();
    expect(realm.isClosed).toBe(true);
  });
});
