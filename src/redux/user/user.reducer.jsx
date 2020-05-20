import { UserActionTypes } from './user.types';

const initialStatus = {
  currentUser: null,
};

const userReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
