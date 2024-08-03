import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// type
import type {Todo} from './type';

interface State {
  todo: Array<Todo>;
}

const initialState: State = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Array<Todo>>) => {
      state.todo = action.payload;
    },
  },
});

export const {setTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
