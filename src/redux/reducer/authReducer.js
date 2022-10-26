import actionTypes from '../actionTypes';

const initialState = {
  user: {},
  isAuth: false,
  error: null,
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
      return { ...state, user: {}, isAuth: false };
    }

    case actionTypes.WHOAMI_REQUESTED: {
      return { ...state, loading: true };
    }
    case actionTypes.WHOAMI_REJECTED: {
      return { ...state, loading: false, isAuth: false };
    }
    case actionTypes.WHOAMI_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
        loading: false,
      };
    }

    case actionTypes.REFRESH_SUCCESS: {
      return { ...state, user: action.payload.user, isAuth: true };
    }

    case actionTypes.EDIT_PROFILE_REQUESTED: {
      return { ...state, error: false, loading: true };
    }
    case actionTypes.EDIT_PROFILE_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: false,
      };
    }
    case actionTypes.EDIT_PROFILE_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }

    case actionTypes.GOOGLE_AUTH_REQUESTED: {
      return { ...state, error: false, loading: true };
    }
    case actionTypes.GOOGLE_AUTH_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    case actionTypes.GOOGLE_AUTH_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
        error: false,
        loading: false,
      };
    }

    default:
      return state;
  }
}

export default authReducer;
