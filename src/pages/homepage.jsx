import React, { Component } from 'react';
import VideoSection from '../components/vidLayout';
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
                        <VideoSection />
                        <h1 className="video-heading">
                            Tutorials
                        </h1>
                        <VideoSection />
                        <h1 className="video-heading">
                            Interviews
                        </h1>
                        <VideoSection />
                        <h1 className="video-heading">
                            Blogs
                        </h1>
                        <VideoSection />
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage