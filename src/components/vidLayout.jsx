import React, { Component } from 'react';
import getVideos from '../services/video';

class vidLayout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount = async () => {
    }

    render() {
        let { videos } = this.props;
        console.log(videos);

        return (
            <div className="video-slidebar" >
                {videos !== null && videos.map(video =>
                    <div className="video-slidebar-container" key={video.videoId}>
                        <div className="video-slidebar-container-iframe" dangerouslySetInnerHTML={{ __html: video.embedded }}>
                        </div>
                        <div className="video-slidebar-container-description">
                            <span className="video-slidebar-container-description-students">{video.viewCount} views</span>
                            {/* <span className="video-slidebar-container-description-time">{video.duration} min</span> */}
                            <span className="video-slidebar-container-description-heading">{video.title}</span>
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