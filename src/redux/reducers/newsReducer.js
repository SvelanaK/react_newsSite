import constants from '../../constants/constants';

const initialState = {};

export default function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case constants.ADD_NEWS: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
