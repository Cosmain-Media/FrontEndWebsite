import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import FilterPage from '../pages/filterpage';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Videos from '../services/video';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Beauty',
      numResults: 3,
      videos: {'Trending': [], 'Interview': [], 'Tutorial': [], 'Blog': [] },
      route: 'Home',
      tags: null,
      error: null
    }
  }

  componentDidMount = async () => {
      for (const type in this.state.videos) {
        let videoReq = await Videos.getVideos(type, this.state.category);
        this.state.videos[type] = videoReq;
        this.setState({ videos: this.state.videos})
      }
      try {
        const response = await Videos.searchTags('beauty');
        this.state.tags = response;
        this.setState({tags: response, error: response.length > 0 ? null : 'Could not find videos related to tags'})
      } catch (error) {
        if(error){
          console.log(error)
          this.setState({tags: null, error: error})
        }
      }
  }

  getVideos = async (category) => {
      console.log(category.query)
      const query = typeof category === 'string' ? category : category.query
      for (const type in this.state.videos) {
        var videoReq = await Videos.getVideos(type, query);
        console.log(videoReq)
        this.state.videos[type] = videoReq;
      }

      this.setState({ currentProfessional: query });
  }

  searchTags = async (e, search) => {
      e.preventDefault()
      try {
        const response = await Videos.searchTags(search);
        this.setState({tags: response, error: response.length > 0 ? null : 'Could not find videos related to tags'})
      } catch (error) {

        if(error){
          this.setState({tags: null, error: error})
        }
      }
  }

  render() {
    const {category, videos, error, tags} = this.state
    return (
      <div>
        <Nav getVideos={this.getVideos}/>
        <Switch>
          <Route exact path ="/" render={ () =>
            <FilterPage 
              currentCategory={category}
              getVideos={this.getVideos}
              searchTags={this.searchTags}
              videos={videos}
              tags={tags}
              error={error}
            />
          }></Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
