// modules
import {all} from 'redux-saga/effects';

// saga
import {todoSaga} from './todo/saga';

export default function* rootSaga() {
  yield all([todoSaga()]);
}
