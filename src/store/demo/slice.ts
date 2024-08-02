import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
  data: Array<number>;
}

const initialState: State = {
  data: [],
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Array<number>>) => {
      state.data = action.payload;
    },
  },
});

export const {setData} = demoSlice.actions;
export const demoReducer = demoSlice.reducer;
