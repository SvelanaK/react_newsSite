import { createAction } from 'redux-actions';

import actionTypes from '../actionTypes';

export const getNewsRequested = createAction(actionTypes.GET_NEWS_REQUESTED);

export const getNewsSuccess = createAction(actionTypes.GET_NEWS_SUCCESS);

export const getNewsRejected = createAction(actionTypes.GET_NEWS_REJECTED);
