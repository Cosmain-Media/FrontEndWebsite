import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
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
      this.setState({currentProfessional: professional});
      var videoReq = await getTrends(professional , this.state.numResults)
      this.setState({videos: videoReq.trendingVideos});
      this.setState({route: 'Filter'});
      window.location = "#top";
  }

  render() {
    const {currentProfessional, videos, route} = this.state

    return (
      <div>
        <a id='top'></a>
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
