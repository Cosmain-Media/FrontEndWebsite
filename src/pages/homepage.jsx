import React, { Component } from 'react';
import Vids from '../components/vidLayout';
import Header from '../components/header'

class HomePage extends Component {
    render () {
        return (
            <div className="homepage">
                <div className="headerRow">
                    <Header />
                </div>
                <Vids />
            </div>
        )
    }
}
export default HomePage