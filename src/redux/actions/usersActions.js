import { createAction } from 'redux-actions';

import actionTypes from '../actionTypes';

export const getUserPageRequested = createAction(actionTypes.USER_PAGE_REQUESTED);
export const getUserPageSuccess = createAction(actionTypes.USER_PAGE_SUCCESS);
export const getUserPageRejected = createAction(actionTypes.USER_PAGE_REJECTED);

export const editProfileRequested = createAction(actionTypes.EDIT_PROFILE_REQUESTED);
export const editProfileSuccess = createAction(actionTypes.EDIT_PROFILE_SUCCESS);
export const editProfileRejected = createAction(actionTypes.EDIT_PROFILE_REJECTED);
