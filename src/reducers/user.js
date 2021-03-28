import { USER_LOADED } from '../constants/user';

const INITIAL_STATE = {
  current: {}
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        current: action.data.data[0]
      };

    default:
      return state;
  }
};

export default user;