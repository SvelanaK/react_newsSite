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
        ...state, allNews: action.payload,
      };
    }
    case actionTypes.GET_NEWS_REQUESTED: {
      return { ...state };
    }
    case actionTypes.GET_NEWS_REJECTED: {
      return { ...state };
    }
    default:
      return state;
  }
}

export default newsReducer;
