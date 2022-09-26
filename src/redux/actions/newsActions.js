import { createAction } from 'redux-actions';

import actionTypes from '../actionTypes';

export const getNewsRequested = createAction(actionTypes.GET_NEWS_REQUESTED);
export const getNewsSuccess = createAction(actionTypes.GET_NEWS_SUCCESS);
export const getNewsRejected = createAction(actionTypes.GET_NEWS_REJECTED);

export const addNewsRequested = createAction(actionTypes.ADD_NEWS_REQUESTED);
export const addNewsSuccess = createAction(actionTypes.ADD_NEWS_SUCCESS);
export const addNewsRejected = createAction(actionTypes.ADD_NEWS_REJECTED);
