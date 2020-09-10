import React, { Component } from 'react';
import Professional from '../components/professional'
import SideNavSection from '../components/sideNavBar';

class ProfessionalPage extends Component {
    render () {
        return (
            <div className="professionalpage">
                <div className="professionalpage-sidenav">
                    <SideNavSection />
                </div>
                <div className="professionalpage-video">
                    <Professional />
                </div>
            </div>
        )
    }
}
export default ProfessionalPage