import { call, put, takeLatest } from 'redux-saga/effects';

import { getNewsApi, addNewsApi } from '../../api/newsApi';
import { refreshApi } from '../../api/authApi';
import actionTypes from '../actionTypes';
import {
  getNewsSuccess,
  getNewsRejected,
  addNewsRejected,
  addNewsSuccess,
} from '../actions/newsActions';
import { refreshSuccess } from '../actions/authActions';

function* getNewsFetchWorker() {
  try {
    const payload = yield call(getNewsApi);
    if (payload.error) {
      throw new Error();
    } else {
      yield put(getNewsSuccess(payload));
    }
  } catch (error) {
    try {
      const userData = yield call(refreshApi);
      localStorage.setItem('cookieRefreshToken', userData.accessToken);
      yield put(refreshSuccess(userData));
      const payload = yield call(getNewsApi);
      yield put(getNewsSuccess(payload));
    } catch (e) {
      yield put(getNewsRejected());
    }
  }
}

function* addNewsWorker({ payload }) {
  try {
    const data = yield call(addNewsApi, payload);
    if (data.error) {
      yield put(addNewsRejected(data.error.message));
    } else {
      yield put(addNewsSuccess(data));
    }
  } catch (error) {
    yield put(addNewsRejected(error));
  }
}

function* newsWatcher() {
  yield takeLatest(actionTypes.GET_NEWS_REQUESTED, getNewsFetchWorker);
  yield takeLatest(actionTypes.ADD_NEWS_REQUESTED, addNewsWorker);
}

export default newsWatcher;
