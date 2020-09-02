import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/homepage'

function App() {
  return (
    <div>
      <Switch>
        <Route exat path="/" render={ () => 
          <HomePage/>
        }></Route>
      </Switch>
    </div>
  );
}

export default App;
