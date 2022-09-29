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
} from '../../api/authApi';
import actionTypes from '../actionTypes';
import {
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
  try {
    const data = yield call(registrationApi, payload);
    localStorage.setItem('cookieRefreshToken', data.accessToken);
    yield put(registrationSuccess(data));
  } catch (error) {
    yield put(registrationRejected(error.response.data));
  }
}

function* loginWorker({ payload }) {
  try {
    const data = yield call(loginApi, payload);
    localStorage.setItem('cookieRefreshToken', data.accessToken);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginRejected(error.response.data));
  }
}

function* logoutWorker() {
  try {
    const data = yield call(logoutApi);
    localStorage.removeItem('cookieRefreshToken');
    yield put(logoutSuccess(data));
  } catch {
    yield put(logoutRejected());
  }
}

function* authWatcher() {
  yield takeLatest(actionTypes.REGISTRATION_REQUESTED, registrationWorker);
  yield takeLatest(actionTypes.LOGIN_REQUESTED, loginWorker);
  yield takeLatest(actionTypes.LOGOUT_REQUESTED, logoutWorker);
  yield takeLatest(actionTypes.WHOAMI_REQUESTED, whoAmIWorker);
}

export default authWatcher;
