import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
    </Switch>
  );
}

export default App;
