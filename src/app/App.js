import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/homepage'
import Test from '../pages/test'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={ () => 
          <HomePage/>
        }></Route>
        <Route exact path ="/test" render={ () =>
          <Test/>
        }></Route>
      </Switch>
    </div>
  );
}

export default App;
