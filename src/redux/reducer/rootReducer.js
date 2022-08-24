import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import authReducer from './authReducer';
import usersReducer from './userReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
  siteUser: usersReducer,
});

export default rootReducer;
