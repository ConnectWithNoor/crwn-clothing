import { cardActionTypes } from './cart.types';

export const toggleCardHidden = () => ({
  type: cardActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cardActionTypes.ADD_ITEM,
  payload: item,
});
