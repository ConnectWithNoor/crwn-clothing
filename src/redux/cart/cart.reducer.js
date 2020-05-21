import { cardActionTypes } from './cart.types';
import { AddItemToCart, removeItemFromCart } from './cart.util.js';
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
    case cardActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cardActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
