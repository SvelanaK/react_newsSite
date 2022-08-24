import { call, put, takeEvery } from 'redux-saga/effects';

import getUserPageApi from '../../api/userApi';

import actionTypes from '../actionTypes';
import {
  getUserPageSuccess,
  getUserPageRejected,
} from '../actions/usersActions';

function* getUserPageWorker({ payload }) {
  try {
    const { data, error } = yield call(getUserPageApi, payload);
    if (error) {
      yield put(getUserPageRejected(error.response.data.message));
    }
    yield put(getUserPageSuccess(data));
  } catch (error) {
    yield put(getUserPageRejected(error.response.data.message));
  }
}

function* userWatcher() {
  yield takeEvery(actionTypes.USER_PAGE_REQUESTED, getUserPageWorker);
}

export default userWatcher;
