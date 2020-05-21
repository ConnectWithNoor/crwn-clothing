import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='img' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </span>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
