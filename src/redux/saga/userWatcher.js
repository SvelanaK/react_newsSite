import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import getUserPageApi from '../../api/userApi';

import actionTypes from '../actionTypes';
import {
  getUserPageSuccess,
  getUserPageRejected,
} from '../actions/usersActions';

function* getUserPageWorker({ payload }) {
  try {
    const data = yield call(getUserPageApi, payload);
    if (data.error) {
      yield put(getUserPageRejected(data.error.message));
    } else {
      yield put(getUserPageSuccess(data));
    }
  } catch (error) {
    yield put(getUserPageRejected(error.response.data));
  }
}

function* userWatcher() {
  yield takeEvery(actionTypes.USER_PAGE_REQUESTED, getUserPageWorker);
}

export default userWatcher;
