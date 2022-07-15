import actionTypes from '../actionTypes';

const initialState = {
  allNews: [],
};

function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_NEWS_SUCCESS: {
      return { ...state, allNews: action.payload };
    }
    default:
      return state;
  }
}

export default newsReducer;
