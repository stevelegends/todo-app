// modules
import {combineReducers} from '@reduxjs/toolkit';

// reducers
import {demoReducer} from './demo/slice';

export const reducer = {
  demoReducer,
  // TODO add more reducer
};

export const rootReducer = combineReducers(reducer);
