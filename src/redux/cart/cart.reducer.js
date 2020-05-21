import { cardActionTypes } from './cart.types';
import { AddItemToCart } from './cart.util.js';
const initialStatus = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case cardActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cardActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
