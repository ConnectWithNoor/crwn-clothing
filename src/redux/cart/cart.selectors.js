import { createSelector } from 'reselect';

// input selectors
const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (accumalator, cartItem) => accumalator + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce((accumalator, cartItem) => {
    return accumalator + cartItem.quantity * cartItem.price;
  }, 0)
);
