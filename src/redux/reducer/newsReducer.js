import types from '../types';

const initialState = {
  allNews: [],
};

function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_NEWS: {
      return { ...state, allNews: action.payload };
    }
    default:
      return state;
  }
}

export default newsReducer;
