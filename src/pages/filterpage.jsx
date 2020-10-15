import React, { Component } from 'react';
import SideNavSection from '../components/sideNavBar';
import VideoLayout from '../components/vidLayout';

class FilterPage extends Component {
    constructor(props) {
        super(props);
    }

    // changeProfessional = async (professional) => {
    //     this.setState({currentProfessional: professional});
    //     var videoReq = await getTrends(professional , this.state.numResults)
    //     this.setState({videos: videoReq.trendingVideos});
    //     window.location = "#top";
    // }
    
    render () {
        console.log("-------filterpage----------");
        return (
            <div className="filterpage">
                <div className="filterpage-sidenav">
                    <SideNavSection changeProfessional={this.props.changeProfessional}/>
                </div>
                <div className="filterpage-main">
                    <div className="filterpage-main-header">
                        <h1 className="filterpage-main-header-category">{this.props.currentProfessional} Videos</h1>
                        <span className="filterpage-main-header-followers">1m Followers</span>
                        <div className="filterpage-main-header-relatedSkills">
                            <span className="filterpage-main-header-relatedSkills-heading">Related Skills</span>
                            <div className="filterpage-main-header-relatedSkills-tags">1</div>
                            <div className="filterpage-main-header-relatedSkills-tags">2</div>
                            <div className="filterpage-main-header-relatedSkills-tags">3</div>
                            <div className="filterpage-main-header-relatedSkills-tags">4</div>
                            <div className="filterpage-main-header-relatedSkills-tags">5</div>
                            <div className="filterpage-main-header-relatedSkills-tags">6</div>
                            <div className="filterpage-main-header-relatedSkills-tags">7</div>
                            <div className="filterpage-main-header-relatedSkills-tags">8</div>
                            <div className="filterpage-main-header-relatedSkills-tags">9</div>
                        </div>
                        <div className="filterpage-main-header-featured">
                            <div className="filterpage-main-header-featured-image">
                                <img className="border-radius-left-corners" src="https://images.unsplash.com/photo-1599689018034-48e2ead82951?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt=""/>
                            </div>
                            <div className="filterpage-main-header-featured-image">
                                <img src="https://images.unsplash.com/photo-1599703170453-e0faceaa79ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
                            </div>
                            <div className="filterpage-main-header-featured-content">
                                <h1 className="filterpage-main-header-featured-content-heading">Photography: Tell a Thousand Words Through Pictures</h1>
                                <div className="filterpage-main-header-featured-content-professor">
                                    <div className="filterpage-main-header-featured-content-professor-image">
                                        <img src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                                    </div>
                                    <div className="filterpage-main-header-featured-content-professor-shortDescription">
                                        <span className="filterpage-main-header-featured-content-professor-shortDescription-name">Nikkolas Smith</span>
                                        <span className="filterpage-main-header-featured-content-professor-shortDescription-profession">Concept Photographer / Illustrator / Editor</span>
                                        <span className="filterpage-main-header-featured-content-professor-shortDescription-followers">5098 students</span>
                                    </div>
                                </div>
                                <span className="filterpage-main-header-featured-content-time">1h 38min</span>
                            </div>
                        </div>
                    </div>
                    <div className="filterpage-main-video">
                        <div className="video">
                            <div className="video-container">
                                <h1 className="video-heading">
                                    Most Popular
                                </h1>
                                <VideoLayout videos={this.props.videos.Trending} />
                                <h1 className="video-heading">
                                    Tutorials
                                </h1>
                                <VideoLayout videos={this.props.videos.Tutorial} />
                                <h1 className="video-heading">
                                    Interviews
                                </h1>
                                <VideoLayout videos={this.props.videos.Interview} />
                                <h1 className="video-heading">
                                    Blogs
                                </h1>
                                <VideoLayout videos={this.props.videos.Blog} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FilterPage