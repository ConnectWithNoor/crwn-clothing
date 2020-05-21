import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => {
    console.log('123');
    return selectCartItemCount(state);
  });

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCardHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default React.memo(CartIcon);
