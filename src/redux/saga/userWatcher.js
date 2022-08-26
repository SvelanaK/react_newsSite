import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import { getUserPageApi, addNewsApi } from '../../api/userApi';

import actionTypes from '../actionTypes';
import {
  getUserPageSuccess,
  getUserPageRejected,
  addNewsRejected,
  addNewsSuccess,
} from '../actions/usersActions';

function* getUserPageWorker({ payload }) {
  try {
    const { data, error } = yield call(getUserPageApi, payload);
    if (error) {
      yield put(getUserPageRejected(error.response.data.message));
    }
    if (data) {
      yield put(getUserPageSuccess(data));
    }
  } catch (error) {
    yield put(getUserPageRejected(error.response.data.message));
  }
}

function* addNewsWorker({ payload }) {
  try {
    const { data, error } = yield call(addNewsApi, payload);
    if (data) {
      yield put(addNewsSuccess(data));
    }
    if (error) {
      yield put(addNewsRejected(error));
    }
  } catch (error) {
    yield put(addNewsRejected(error));
  }
}

function* userWatcher() {
  yield takeEvery(actionTypes.USER_PAGE_REQUESTED, getUserPageWorker);
  yield takeLatest(actionTypes.ADD_NEWS_REQUESTED, addNewsWorker);
}

export default userWatcher;
