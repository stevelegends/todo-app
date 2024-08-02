// modules
import {all} from 'redux-saga/effects';

// saga
import {demoSaga} from './demo/saga';

export default function* rootSaga() {
  yield all([demoSaga()]);
}
