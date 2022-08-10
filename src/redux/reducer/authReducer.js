import actionTypes from '../actionTypes';

const initialState = {
  user: {},
  isAuth: false,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.REGISTRATION_REQUESTED: {
      return { ...state };
    }
    case actionTypes.REGISTRATION_SUCCESS: {
      return { ...state, user: action.payload.user, isAuth: true };
    }
    case actionTypes.REGISTRATION_REJECTED: {
      return { ...state };
    }

    case actionTypes.LOGIN_REQUESTED: {
      return { ...state };
    }
    case actionTypes.LOGIN_SUCCESS: {
      return { ...state, user: action.payload.user, isAuth: true };
    }
    case actionTypes.LOGIN_REJECTED: {
      return { ...state };
    }

    case actionTypes.LOGOUT_REQUESTED: {
      return { ...state };
    }
    case actionTypes.LOGOUT_SUCCESS: {
      return { ...state, isAuth: false };
    }
    case actionTypes.LOGOUT_REJECTED: {
      return { ...state };
    }

    case actionTypes.WHOAMI_REQUESTED: {
      return { ...state };
    }
    case actionTypes.WHOAMI_SUCCESS: {
      return { ...state, user: action.payload.user, isAuth: true };
    }
    case actionTypes.WHOAMI_REJECTED: {
      return { ...state };
    }

    case actionTypes.REFRESH_REQUESTED: {
      return { ...state };
    }
    case actionTypes.REFRESH_SUCCESS: {
      return { ...state, user: action.payload.user, isAuth: true };
    }
    case actionTypes.REFRESH_REJECTED: {
      return { ...state };
    }

    default:
      return state;
  }
}

export default authReducer;
