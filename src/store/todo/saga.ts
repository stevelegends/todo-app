// modules
import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest, all, fork} from 'redux-saga/effects';
import uuid from 'react-native-uuid';

// reducer
import * as slice from './slice';

// type
import type {Todo} from '../todo/type';

// services
import {todoService} from 'src/services/todo.service';

function* initTodoSaga() {
  yield put(getTodoAction());
}

function* getTodoSaga() {
  const data = todoService.getTodo();
  yield put(slice.setTodo(data));
}

function* addTodoSaga(action: PayloadAction<Todo>) {
  todoService.addTodo({
    _id: uuid.v4() as string,
    title: action.payload.title,
    description: action.payload.description,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  yield put(getTodoAction());
}

function* updateCompleteTodoSaga(action: PayloadAction<{_id: string}>) {
  const id = action.payload?._id;
  if (id) {
    todoService.updateCompleteTodo(id);
    yield put(getTodoAction());
  }
}

function* deleteTodoSaga(action: PayloadAction<{_id: string}>) {
  const id = action.payload._id;
  if (id) {
    todoService.deleteTodo(id);
    yield put(getTodoAction());
  }
}

export const addTodoAction = createAction<Todo>(
  slice.todoSlice.name + '/addTodoAction',
);
export const getTodoAction = createAction(
  slice.todoSlice.name + '/getTodoAction',
);
export const updateCompleteTodoAction = createAction<{_id: string}>(
  slice.todoSlice.name + '/updateCompleteTodoAction',
);
export const deleteTodoAction = createAction<{_id: string}>(
  slice.todoSlice.name + '/deleteTodoAction',
);

export function* todoSaga(): any {
  yield all([fork(initTodoSaga)]);
  yield all([
    yield takeLatest(addTodoAction, addTodoSaga),
    yield takeLatest(getTodoAction, getTodoSaga),
    yield takeLatest(updateCompleteTodoAction, updateCompleteTodoSaga),
    yield takeLatest(deleteTodoAction, deleteTodoSaga),
  ]);
}
