import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from '../pages/homepage';
import FilterPage from '../pages/filterpage';
import Test from '../pages/test';
import Professional from '../pages/professionalpage';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Videos from '../services/video';


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

  getVideos = async (category) => {
      for (const type in this.state.videos) {
        var videoReq = await Videos.getVideos(type, category);
        this.state.videos[type] = videoReq;
      }

      this.setState({ currentProfessional: category, route: 'Filter' });
      window.location = "#top";
  }

  searchProfessional = async (professional) => {
      // console.log(professional)
      let timeout = null;

      clearTimeout(timeout);

      timeout = setTimeout( async () => {
        for (const type in this.state.videos) {
          // console.log(type)
          let videoReq = await Videos.searchVideos(type, professional);
          this.setState(prevState => ({
            videos: {                   // object that we want to update
                ...prevState.videos,    // keep all other key-value pairs
                [type]: videoReq     // update the value of specific key
            }
        }))
        }
        // console.log(this.state.videos)
      }, 300)
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
        <Nav changeProfessional={this.changeProfessional} searchProfessional={this.searchProfessional}/>
        <Switch>
          <Route exact path="/" render={ () => 
            <HomePage/>
          }></Route>
          <Route exact path ="/videos" render={ () =>
            <FilterPage 
              currentProfessional={currentProfessional}
              getVideos={this.getVideos}
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
