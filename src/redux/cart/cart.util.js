export const AddItemToCart = (cartItems, itemToAdd) => {
  const isExist = cartItems.find((item) => item.id === itemToAdd.id);

  if (isExist) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
