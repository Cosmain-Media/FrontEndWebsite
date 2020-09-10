import React, { Component } from 'react';
import SideNavSection from '../components/sideNavBar';
import VideoSection from '../components/vidLayout';
class FilterPage extends Component {
    render () {
        return (
            <div className="filterpage">
                <div className="filterpage-sidenav">
                    <SideNavSection />
                </div>
                <div className="filterpage-video">
                    <VideoSection />
                </div>
            </div>
        )
    }
}
export default FilterPage