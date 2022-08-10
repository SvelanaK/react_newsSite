import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
});

export default rootReducer;
