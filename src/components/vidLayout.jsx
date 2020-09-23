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
        this.setState({videos: tutorials });
        console.log(this.state.videos);
    }

    componentWillUnmount = async () => {
        
    }

    render () {
        return (
            <div className="video-slidebar" >
                {this.state.videos !== null && this.state.videos.map( video =>
                    <div className="video-slidebar-container" key={video._id}>
                        <div className="video-slidebar-container-iframe">
                            <iframe title={video.title} src={video.videoLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
                        </div>
                        <div className="video-slidebar-container-description">
                        <span className="video-slidebar-container-description-students">{video.favorites} favorites</span>
                        <span className="video-slidebar-container-description-time">{video.duration} min</span>
                        <span className="video-slidebar-container-description-heading">{video.title}</span>
                        <span className="video-slidebar-container-description-professor">Profesional ID: {video.professionalID}</span>
                        <span className="video-slidebar-container-description-bookmark">
                        <svg className="video-slidebar-container-description-bookmark-icon">
                            <use xlinkHref="/images/sprite.svg#icon-bookmark"></use>
                        </svg>
                        </span>
                        </div>
                    </div>               
                )}
            </div> 
        )
    }
}

export default vidLayout