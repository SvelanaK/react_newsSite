import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  registrationApi,
  loginApi,
  logoutApi,
  whoAmIApi,
  googleApi,
} from '../../api/authApi';
import actionTypes from '../actionTypes';
import {
  googleAuthSuccess,
  googleAuthRejected,
  registrationSuccess,
  registrationRejected,
  loginSuccess,
  loginRejected,
  logoutSuccess,
  logoutRejected,
  whoAmIRejected,
  whoAmISuccess,
} from '../actions/authActions';

function* whoAmIWorker() {
  try {
    const data = yield call(whoAmIApi);
    yield put(whoAmISuccess(data));
  } catch {
    yield put(whoAmIRejected());
  }
}

function* registrationWorker({ payload }) {
  const { values, picture } = payload;
  const form = new FormData();
  form.append('picture', picture);
  const keys = Object.keys(values);
  keys.forEach((key) => form.append(key, values[key]));
  try {
    const data = yield call(registrationApi, form);
    localStorage.setItem('accessToken', data.accessToken);
    yield put(registrationSuccess(data));
  } catch (error) {
    yield put(registrationRejected(error.response.data));
  }
}

function* loginWorker({ payload }) {
  try {
    const data = yield call(loginApi, payload);
    localStorage.setItem('accessToken', data.accessToken);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginRejected(error.response.data));
  }
}

function* logoutWorker() {
  try {
    const data = yield call(logoutApi);
    localStorage.removeItem('accessToken');
    yield put(logoutSuccess(data));
  } catch {
    yield put(logoutRejected());
  }
}

function* googleAuthWorker({ payload }) {
  try {
    const data = yield call(googleApi, payload);
    localStorage.setItem('accessToken', data.accessToken);
    yield put(googleAuthSuccess(data));
  } catch (error) {
    yield put(googleAuthRejected(error.response.data));
  }
}

function* authWatcher() {
  yield takeLatest(actionTypes.GOOGLE_AUTH_REQUESTED, googleAuthWorker);
  yield takeLatest(actionTypes.REGISTRATION_REQUESTED, registrationWorker);
  yield takeLatest(actionTypes.LOGIN_REQUESTED, loginWorker);
  yield takeLatest(actionTypes.LOGOUT_REQUESTED, logoutWorker);
  yield takeLatest(actionTypes.WHOAMI_REQUESTED, whoAmIWorker);
}

export default authWatcher;
