import React, { Component } from 'react';
import SideNavBar from '../components/sideNavBar';
import Footer from '../components/footer';
import Carousel from '../components/header'

class Test extends Component {
    render () {
        return (
            <div >
                <SideNavBar />  
                <SideNavBar />  
                <Carousel />
                <Footer />
            </div>
        )
    }
}
export default Test