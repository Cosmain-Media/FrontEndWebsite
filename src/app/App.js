import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from '../pages/homepage';
import FilterPage from '../pages/filterpage';
import Test from '../pages/test';
import Professional from '../pages/professionalpage';
import Nav from '../components/nav';
import Footer from '../components/footer';
import getVideos from '../services/video';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentProfessional: 'Barber',
      numResults: 3,
      videos: {'Trending': [], 'Interview': [], 'Tutorial': [], 'Blog': [] },
      route: 'Home'
    }
  }

  changeProfessional = async (professional) => {
      for (const type in this.state.videos) {
        var videoReq = await getVideos(type, professional);
        this.state.videos[type] = videoReq;
      }

      this.setState({ currentProfessional: professional, route: 'Filter' });
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
    const {currentProfessional, videos} = this.state
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
