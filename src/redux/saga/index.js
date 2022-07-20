import { all, call } from 'redux-saga/effects';

import newsWatcher from './newsWatcher';

export default function* rootSaga() {
  yield all([call(newsWatcher)]);
}
