import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRedirect = ({ children: Component, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={() => (currentUser ? <Redirect to='/' /> : Component)}
    />
  );
};

export default AuthRedirect;
