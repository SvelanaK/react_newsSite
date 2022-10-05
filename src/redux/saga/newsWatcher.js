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
import { refreshRejected, refreshSuccess } from '../actions/authActions';

export function* refreshToken() {
  try {
    const userData = yield call(refreshApi);
    localStorage.setItem('accessToken', userData.accessToken);
    yield put(refreshSuccess(userData));
  } catch {
    yield put(refreshRejected());
  }
}

function* getNewsFetchWorker() {
  try {
    const payload = yield call(getNewsApi);
    yield put(getNewsSuccess(payload));
  } catch {
    yield refreshToken();
    try {
      const payload = yield call(getNewsApi);
      yield put(getNewsSuccess(payload));
    } catch {
      yield put(getNewsRejected());
    }
  }
}

function* addNewsWorker({ payload }) {
  const { values, picture } = payload;
  const form = new FormData();
  form.append('picture', picture);
  const keys = Object.keys(values);
  keys.forEach((key) => form.append(key, values[key]));
  try {
    const data = yield call(addNewsApi, form);
    yield put(addNewsSuccess(data));
  } catch {
    yield refreshToken();
    try {
      const data = yield call(addNewsApi, form);
      yield put(addNewsSuccess(data));
    } catch {
      yield put(addNewsRejected());
    }
  }
}

function* newsWatcher() {
  yield takeLatest(actionTypes.GET_NEWS_REQUESTED, getNewsFetchWorker);
  yield takeLatest(actionTypes.ADD_NEWS_REQUESTED, addNewsWorker);
}

export default newsWatcher;
