import { createAction } from 'redux-actions';

import actionTypes from '../actionTypes';

export const registrationRequested = createAction(actionTypes.REGISTRATION_REQUESTED);
export const registrationSuccess = createAction(actionTypes.REGISTRATION_SUCCESS);
export const registrationRejected = createAction(actionTypes.REGISTRATION_REJECTED);

export const loginRequested = createAction(actionTypes.LOGIN_REQUESTED);
export const loginSuccess = createAction(actionTypes.LOGIN_SUCCESS);
export const loginRejected = createAction(actionTypes.LOGIN_REJECTED);

export const logoutRequested = createAction(actionTypes.LOGOUT_REQUESTED);
export const logoutSuccess = createAction(actionTypes.LOGOUT_SUCCESS);
export const logoutRejected = createAction(actionTypes.LOGOUT_REJECTED);

export const refreshRequested = createAction(actionTypes.REFRESH_REQUESTED);
export const refreshSuccess = createAction(actionTypes.REFRESH_SUCCESS);
export const refreshRejected = createAction(actionTypes.REFRESH_REJECTED);

export const whoAmIRequested = createAction(actionTypes.WHOAMI_REQUESTED);
export const whoAmISuccess = createAction(actionTypes.WHOAMI_SUCCESS);
export const whoAmIRejected = createAction(actionTypes.WHOAMI_REJECTED);
