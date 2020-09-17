import React, { Component } from 'react';
import getVideos from '../services/video';

class vidLayout extends Component {
    constructor(){
        super();
        this.state = {
            videos: []
        }
    }
    componentDidMount = async () =>  {
        this.setState({videos: getVideos('tutorial')});
        console.log(this.state.videos);
    }
    componentWillUnmount() {
        
    }

    render () {
        return (
            <div className="video">
                <div className="video-container">
                    <h1 className="video-heading">
                        Most Popular
                    </h1>
                    
                    {this.state.videos.map( function(video,index){ return <div className="video-slidebar" key={index}>
                        <div className="video-slidebar-container">
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
                    </div>})}

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