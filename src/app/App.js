import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'


import HomePage from '../pages/homepage'
import FilterPage from '../pages/filterpage'
import Test from '../pages/test'
import Professional from '../pages/professionalpage'


import Nav from '../components/nav'
import Footer from '../components/footer'

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" render={ () => 
          <HomePage/>
        }></Route>
        <Route exact path ="/videos" render={ () =>
          <FilterPage />
        }></Route>
        <Route exact path ="/test" render={ () =>
          <Test/>
        }></Route>
        <Route exact path ="/professional" render={ () =>
          <Professional/>
        }></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
