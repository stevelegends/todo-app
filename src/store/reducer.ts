// modules
import {combineReducers} from '@reduxjs/toolkit';

// reducers
import {todoReducer} from './todo/slice';

export const reducer = {
  todoReducer,
  // TODO add more reducer
};

export const rootReducer = combineReducers(reducer);
