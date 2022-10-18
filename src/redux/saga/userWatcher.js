import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import {
  getUserPageApi,
  editUserPageApi,
} from '../../api/userApi';
import actionTypes from '../actionTypes';
import {
  getUserPageSuccess,
  getUserPageRejected,
  editProfileSuccess,
  editProfileRejected,
} from '../actions/usersActions';
import { refreshToken } from './newsWatcher';

function* getUserPageWorker({ payload }) {
  try {
    const data = yield call(getUserPageApi, payload);
    if (data.message) {
      yield put(getUserPageRejected(data.message));
    } else {
      yield put(getUserPageSuccess(data));
    }
  } catch (error) {
    yield put(getUserPageRejected(error.response.data));
  }
}

function* editUserPageWorker({ payload }) {
  const { values, picture } = payload;
  const form = new FormData();
  form.append('picture', picture);
  const keys = Object.keys(values);
  keys.forEach((key) => form.append(key, values[key]));
  try {
    const data = yield call(editUserPageApi, form);
    yield put(editProfileSuccess(data));
  } catch {
    yield refreshToken();
    try {
      const data = yield call(editUserPageApi, form);
      yield put(editProfileSuccess(data));
    } catch {
      yield put(editProfileRejected());
    }
  }
}

function* userWatcher() {
  yield takeEvery(actionTypes.USER_PAGE_REQUESTED, getUserPageWorker);
  yield takeEvery(actionTypes.EDIT_PROFILE_REQUESTED, editUserPageWorker);
}

export default userWatcher;
