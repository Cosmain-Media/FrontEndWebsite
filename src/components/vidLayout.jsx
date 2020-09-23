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
                    {this.state.videos !== null && this.state.videos.map( (v, index) =>
                        <div className="video-slidebar" key={index}>
                            <div className="video-slidebar-container">
                                <div className="video-slidebar-container-iframe">
                                    <iframe src={v.videoLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            <div className="video-slidebar-container-description">
                                <span className="video-slidebar-container-description-students">{v.favorites}</span>
                                <span className="video-slidebar-container-description-time">{v.duration}</span>
                                <span className="video-slidebar-container-description-heading">{v.title}</span>
                                <span className="video-slidebar-container-description-professor">{v.professionalID}</span>
                                <span className="video-slidebar-container-description-bookmark">
                                <svg className="video-slidebar-container-description-bookmark-icon">
                                    <use xlinkHref="/images/sprite.svg#icon-bookmark"></use>
                                </svg>
                                </span>
                                </div>
                            </div>               
                        </div>
                    )}

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