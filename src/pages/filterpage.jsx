import React, { Component } from 'react';
import SideNavSection from '../components/sideNavBar';
import VideoSection from '../components/vidLayout';
import FooterSection from '../components/footer';

class FilterPage extends Component {
    render () {
        return (
            <div className="filterpage">
                <div className="filterpage-sidenav">
                    <SideNavSection />
                </div>
                <div className="filterpage-main">
                    <div className="filterpage-main-header">
                        <h1 className="filterpage-main-header-category">Online Barber Classes</h1>
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
                            <div className="filterpage-main-header-featured-image-1">
                                <img src="" alt=""/>
                            </div>
                            <div className="filterpage-main-header-featured-image-2">
                                <img src="" alt=""/>
                            </div>
                            <div className="filterpage-main-header-featured-content">
                                <h1 className="filterpage-main-header-featured-content-heading"></h1>
                                <div className="filterpage-main-header-featured-content-professor"></div>
                                <span className="filterpage-main-header-featured-content-time"></span>
                            </div>
                        </div>
                    </div>
                    <div className="filterpage-main-video">
                      <VideoSection />
                    </div>
                </div>
                <div className="filterpage-footer">
                    <FooterSection />
                </div>
            </div>
        )
    }
}
export default FilterPage