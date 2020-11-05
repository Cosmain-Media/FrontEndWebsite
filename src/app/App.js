import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/homepage';
import FilterPage from '../pages/filterpage';
import Test from '../pages/test';
import Professional from '../pages/professionalpage';
import Nav from '../components/nav';
import Footer from '../components/footer';
import getVideos from '../services/video';
import {AuthService} from '../services/auth';
class App extends Component {
  constructor() {

    super();
    this.state = {
      isAuthenticated:false,
      currentProfessional: 'Barber',
      numResults: 3,
      videos: { 'Trending': [], 'Interview': [], 'Tutorial': [], 'Blog': [] },
      route: 'Home'
    }
  }

  componentDidMount() {
    AuthService.isAuthenticated.subscribe(x => this.setState({
      isAuthenticated: x,
    }));
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
    if (this.state.route === 'Filter') {
      return (
        <Redirect
          to={`/videos`}
        />
      );
    }
  }

  render() {
    const { currentProfessional, videos ,isAuthenticated} = this.state
    {if(isAuthenticated){
      console.log(isAuthenticated);
    }}
    return (
      <div>
        <a id='top'>{this.renderRedirect()}</a>
        <Nav changeProfessional={this.changeProfessional} />
        <Switch>
          <Route exact path="/" render={({history}) =>
            <HomePage history={history}/>
          }></Route>
          <Route exact path="/videos" render={({history}) =>
            <FilterPage
              history={history}
              currentProfessional={currentProfessional}
              changeProfessional={this.changeProfessional}
              videos={videos}
            />
          }></Route>
          <Route exact path="/test" render={({history}) =>
            <Test history={history}/>
          }></Route>
          <Route exact path="/professional" render={({history}) =>
            <Professional history={history}/>
          }></Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
