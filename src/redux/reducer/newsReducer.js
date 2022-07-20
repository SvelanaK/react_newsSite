import actionTypes from '../actionTypes';

const initialState = {
  allNews: [],
  loading: false,
  error: false,
};

function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_NEWS_SUCCESS: {
      return { ...state, allNews: action.payload, loading: false };
    }
    case actionTypes.GET_NEWS_REQUESTED: {
      return { ...state, loading: true };
    }
    case actionTypes.GET_NEWS_REJECTED: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
}

export default newsReducer;
