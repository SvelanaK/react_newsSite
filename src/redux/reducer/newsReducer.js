import actionTypes from '../actionTypes';

const initialState = {
  allNews: [],
  loading: false,
  error: false,
};

function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_NEWS_SUCCESS: {
      return {
        ...state, allNews: action.payload, error: false, loading: false,
      };
    }
    case actionTypes.GET_NEWS_REQUESTED: {
      return { ...state, loading: true };
    }
    case actionTypes.GET_NEWS_REJECTED: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
}

export default newsReducer;
