import { call, put, takeEvery } from 'redux-saga/effects';

import getNewsApi from '../../api/newsApi';
import actionTypes from '../actionTypes';
import { getNewsSuccess, getNewsRejected } from '../actions/newsAction';

function* getNewsFetchWorker() {
  try {
    const payload = yield call(getNewsApi);
    yield put(getNewsSuccess(payload));
  } catch (e) {
    yield put(getNewsRejected());
  }
}

function* newsWatcher() {
  yield takeEvery(actionTypes.GET_NEWS_REQUESTED, getNewsFetchWorker);
}

export default newsWatcher;
