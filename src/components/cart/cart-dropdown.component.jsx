import React from 'react';
import { useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItem } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const cartItems = useSelector((state) => selectCartItem(state));
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default React.memo(CartDropdown);
