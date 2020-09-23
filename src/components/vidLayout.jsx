import React, { Component } from 'react';
import getVideos from '../services/video';

class vidLayout extends Component {
    constructor(){
        super();
        this.state = {
            videos: null
        }
    }
    componentDidMount = async () =>  {
        const tutorials = await getVideos('tutorial')
        console.log(tutorials)
        this.setState({videos: tutorials });
        console.log(this.state.videos);
    }

    componentWillUnmount = async () => {
        
    }

    render () {
        return (
            <div className="video">
                <div className="video-container">
                    <h1 className="video-heading">
                        Most Popular
                    </h1>
                    <div className="video-slidebar" >
                        {this.state.videos !== null && this.state.videos.map( video =>
                            <div className="video-slidebar-container" key={video._id}>
                                <div className="video-slidebar-container-iframe">
                                    <iframe src={video.videoLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-slidebar-container-description">
                                <span className="video-slidebar-container-description-students">{video.favorites}</span>
                                <span className="video-slidebar-container-description-time">{video.duration}</span>
                                <span className="video-slidebar-container-description-heading">{video.title}</span>
                                <span className="video-slidebar-container-description-professor">{video.professionalID}</span>
                                <span className="video-slidebar-container-description-bookmark">
                                <svg className="video-slidebar-container-description-bookmark-icon">
                                    <use xlinkHref="/images/sprite.svg#icon-bookmark"></use>
                                </svg>
                                </span>
                                </div>
                            </div>               
                        )}
                    </div>

                    <h1 className="video-heading">
                        Tutorials
                    </h1>
                    <h1 className="video-heading">
                        Interviews
                    </h1>
                    <h1 className="video-heading">
                        Blog
                    </h1>
                </div>
            </div>       
        )
    }
}

export default vidLayout