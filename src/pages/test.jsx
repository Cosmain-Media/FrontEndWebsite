import React, { Component } from 'react';
import SideNavBar from '../components/sideNavBar';
import Professional from '../components/professional';
import Footer from '../components/footer'

class Test extends Component {
    render () {
        return (
            <div >
                <SideNavBar />  
                <Professional />
                <Footer />
            </div>
        )
    }
}
export default Test