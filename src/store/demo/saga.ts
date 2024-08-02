// modules
import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest, all} from 'redux-saga/effects';

// reducer
import * as slice from './slice';

// store
import {setData} from './slice';

export const setDemoDataAction = createAction(
  slice.demoSlice.name + '/setDemoDataAction',
);

function* setDemoDataSaga(_action: PayloadAction) {
  // README: dummy
  const data = [1, 2];
  yield put(setData(data));
}

export function* demoSaga(): any {
  yield all([yield takeLatest(setDemoDataAction, setDemoDataSaga)]);
}
