import actionTypes from '../actionTypes';

const initialState = {
  siteUser: {},
  usersNews: [],
  error: null,
  loading: false,
};

function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.USER_PAGE_REQUESTED: {
      return { ...state, error: false, loading: true };
    }
    case actionTypes.USER_PAGE_SUCCESS: {
      return {
        ...state,
        siteUser: action.payload.user,
        usersNews: action.payload.usersNews,
        loading: false,
        error: false,
      };
    }
    case actionTypes.USER_PAGE_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }

    default:
      return state;
  }
}

export default usersReducer;
