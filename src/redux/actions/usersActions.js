import { createAction } from 'redux-actions';

import actionTypes from '../actionTypes';

export const getUserPageRequested = createAction(actionTypes.USER_PAGE_REQUESTED);
export const getUserPageSuccess = createAction(actionTypes.USER_PAGE_SUCCESS);
export const getUserPageRejected = createAction(actionTypes.USER_PAGE_REJECTED);

export const addNewsRequested = createAction(actionTypes.ADD_NEWS_REQUESTED);
export const addNewsSuccess = createAction(actionTypes.ADD_NEWS_SUCCESS);
export const addNewsRejected = createAction(actionTypes.ADD_NEWS_REJECTED);
