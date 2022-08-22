import { all, call } from 'redux-saga/effects';

import newsWatcher from './newsWatcher';
import authWatcher from './authWatcher';

export default function* rootSaga() {
  yield all([call(newsWatcher), call(authWatcher)]);
}
