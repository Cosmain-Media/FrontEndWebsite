import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from '../pages/homepage';
import FilterPage from '../pages/filterpage';
import Test from '../pages/test';
import Professional from '../pages/professionalpage';
import Nav from '../components/nav';
import Footer from '../components/footer';
import getTrends from '../services/trending';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentProfessional: 'Barber',
      numResults: 3,
      videos: [],
      route: 'Home'
    }
  }

  changeProfessional = async (professional) => {
      var videoReq = await getTrends(professional + ' trends');
      this.setState({currentProfessional: professional, videos: videoReq, route: 'Filter'});
      window.location = "#top";
  }

  renderRedirect = () => {
    if (this.state.route ==='Filter') {
      return (
        <Redirect
          to={`/videos`}
        />
      );
    }
  }

  render() {
    const {currentProfessional, videos, route} = this.state
    console.log("-------app----------");
    return (
      <div>
        <a id='top'>{this.renderRedirect()}</a>
        <Nav changeProfessional={this.changeProfessional}/>
        <Switch>
          <Route exact path="/" render={ () => 
            <HomePage/>
          }></Route>
          <Route exact path ="/videos" render={ () =>
            <FilterPage 
            currentProfessional={currentProfessional}
            changeProfessional={this.changeProfessional}
            videos={videos}
            />
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
}

export default App;
