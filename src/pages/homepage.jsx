import React, { Component } from 'react';
import VideoLayout from '../components/vidLayout';
import Header from '../components/header'

class HomePage extends Component {
    render () {
        return (
            <div className="homepage">
                <div className="headerRow">
                    <Header />
                </div>
                <div className="video">
                    <div className="video-container">
                        <h1 className="video-heading">
                            Most Popular
                        </h1>
                        <VideoLayout />
                        <h1 className="video-heading">
                            Tutorials
                        </h1>
                        <VideoLayout />
                        <h1 className="video-heading">
                            Interviews
                        </h1>
                        <VideoLayout />
                        <h1 className="video-heading">
                            Blogs
                        </h1>
                        <VideoLayout />
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage