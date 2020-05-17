import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './App.css';

function App() {
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
      </Switch>
    </>
  );
}

export default App;
