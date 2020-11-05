import React, { Component } from 'react';
import SideNavBar from '../components/sideNavBar';
import Login from '../components/login';
import Signup from '../components/signup';


class Test extends Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
            <div >
                <Login history ={this.props.history}/>
            </div>
        )
    }
}
export default Test