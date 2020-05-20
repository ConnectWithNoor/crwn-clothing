import { cardActionTypes } from './cart.types';

const initialStatus = {
  hidden: true,
};

const cartReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case cardActionTypes.TOGGLE_CART_HIDDEN:
      return {
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
