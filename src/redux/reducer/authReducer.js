import actionTypes from '../actionTypes';

const initialState = {
  user: {},
  isAuth: false,
  error: '',
  loading: false,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.REGISTRATION_REQUESTED: {
      return { ...state, error: false, loading: true };
    }
    case actionTypes.REGISTRATION_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    case actionTypes.REGISTRATION_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
        error: false,
        loading: false,
      };
    }

    case actionTypes.LOGIN_REQUESTED: {
      return { ...state, error: false, loading: true };
    }
    case actionTypes.LOGIN_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
        error: false,
        loading: false,
      };
    }

    case actionTypes.LOGOUT_REQUESTED:
    case actionTypes.LOGOUT_REJECTED: {
      return { ...state };
    }
    case actionTypes.LOGOUT_SUCCESS: {
      return { ...state, isAuth: false };
    }

    case actionTypes.WHOAMI_REQUESTED:
    case actionTypes.WHOAMI_REJECTED: {
      return { ...state };
    }
    case actionTypes.WHOAMI_SUCCESS: {
      return { ...state, user: action.payload.user, isAuth: true };
    }

    case actionTypes.REFRESH_SUCCESS: {
      return { ...state, user: action.payload.user, isAuth: true };
    }

    default:
      return state;
  }
}

export default authReducer;
