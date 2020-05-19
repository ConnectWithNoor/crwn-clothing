import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.compoent';
import { auth, createUserProfileDocument } from './firebase/fireabase.utils';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        dispatch(setCurrentUser(userAuth));
        return;
      }

      const userAuthRef = await createUserProfileDocument(userAuth);
      userAuthRef.onSnapshot((snap) => {
        dispatch(
          setCurrentUser({
            id: snap.id,
            ...snap.data(),
          })
        );
      });
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/shop'>
          <ShopPage />
        </Route>
        <Route path='/signin'>
          <SignInAndSignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
