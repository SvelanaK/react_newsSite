import { createAction } from 'redux-actions';

import actionTypes from '../actionTypes';

export const getUserPageRequested = createAction(actionTypes.USER_PAGE_REQUESTED);
export const getUserPageSuccess = createAction(actionTypes.USER_PAGE_SUCCESS);
export const getUserPageRejected = createAction(actionTypes.USER_PAGE_REJECTED);

export const editUserPageRequested = createAction(actionTypes.EDIT_USER_PAGE_REQUESTED);
export const editUserPageSuccess = createAction(actionTypes.EDIT_USER_PAGE_SUCCESS);
export const editUserPageRejected = createAction(actionTypes.EDIT_USER_PAGE_REJECTED);
