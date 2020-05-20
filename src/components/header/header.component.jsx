import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/fireabase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';

import './header.styles.scss';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          shop
        </Link>
        <Link className='option' to='/contact'>
          contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            signin
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

export default Header;
