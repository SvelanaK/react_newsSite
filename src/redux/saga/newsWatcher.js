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

function* refreshToken(api, success, rejected) {
  try {
    const userData = yield call(refreshApi);
    localStorage.setItem('cookieRefreshToken', userData.accessToken);
    yield put(refreshSuccess(userData));
    const news = yield call(api);
    yield put(success(news));
  } catch (e) {
    yield put(rejected());
  }
}

function* getNewsFetchWorker() {
  try {
    const payload = yield call(getNewsApi);
    if (payload.message) {
      yield refreshToken(getNewsApi, getNewsSuccess, getNewsRejected);
    } else {
      yield put(getNewsSuccess(payload));
    }
  } catch {
    yield put(getNewsRejected());
  }
}

function* addNewsWorker({ payload }) {
  try {
    const data = yield call(addNewsApi, payload);
    if (data.message) {
      yield refreshToken(addNewsApi, addNewsSuccess, addNewsRejected);
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
