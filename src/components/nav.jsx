import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
           navDrop: false,
        }
    }

    browser = React.createRef();
    
    componentDidMount() {
        document.addEventListener("mousedown", this.onClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.onClickOutside);
    }

    onClickOutside = event => {
        if (this.browser.current && !this.browser.current.contains(event.target)) {
            this.setState({
                navDrop: false
            })
        }
    }

    navDrop = () => {
        if(this.state.navDrop === true){
            this.setState({
                navDrop:false
            })
        }
        else{
            this.setState({
                navDrop: true
            })
        }
    }

    render () {
        const { getVideos } = this.props
        
        return (
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/">
                        Cosmain
                    </Link>
                </div>
                <div className="nav-menu">
                    <div className="nav-menu-items" name="beauty" onClick={ (e) => getVideos(e)}>
                        <Link to="/">
                            Beauty
                        </Link>
                    </div>
                    <div className="nav-menu-items">
                        <Link to="/">
                            Wellness
                        </Link>
                    </div>
                    <div className="nav-menu-items">
                        <Link to="/">
                            Lifestyle
                        </Link>
                    </div>
                    <div className="nav-menu-items">
                        <Link to="/">
                            Login
                        </Link>
                    </div>
                    <div className="nav-menu-items">
                        <Link to="/">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav