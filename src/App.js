import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.compoent';
import { auth, createUserProfileDocument } from './firebase/fireabase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        setCurrentUser(null);
        return;
      }

      const userAuthRef = await createUserProfileDocument(userAuth);
      userAuthRef.onSnapshot((snap) => {
        setCurrentUser({
          id: snap.id,
          ...snap.data(),
        });
      });
    });

    return () => unsubscribe();
  }, []);

  console.log(currentUser);

  return (
    <>
      <Header currentUser={currentUser} />

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
