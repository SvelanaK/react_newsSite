import { call, put, takeEvery } from 'redux-saga/effects';

import getNewsApi from '../../api/newsApi';

import types from '../types';

function* getNewsFetchWorker() {
  const payload = yield call(getNewsApi);
  yield put({ type: types.SET_NEWS, payload });
}

function* newsWatcher() {
  yield takeEvery(types.GET_NEWS, getNewsFetchWorker);
}

export default newsWatcher;
