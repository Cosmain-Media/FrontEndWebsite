import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
           navDrop: false,
        }
    }
    
    burger = React.createRef()
    
    componentDidMount() {
        document.addEventListener("mousedown", this.onClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.onClickOutside);
    }

    onClickOutside = event => {
        if (this.burger.current && !this.burger.current.contains(event.target)) {
            this.setState({
                navDrop: false
            })
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            alert('You clicked outside of me!');
        }
    }

    navDrop = (e) => {
        this.setState({navDrop: !this.state.navDrop})
    }

    render () {
        const { getVideos } = this.props
        
        return (
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/">
                        <svg>
                            <use xlinkHref="/images/sprite.svg#icon-logo"></use>
                        </svg>
                    </Link>
                </div>
                <div className="nav-menu">
                    <div className="nav-menu-items burger ">
                        
                        <svg className="burger-menu burger-menu-icon" onClick={ (e) => this.navDrop(e)}>
                            <use xlinkHref="/images/sprite.svg#icon-menu3"></use>
                        </svg>
                        
                        {this.state.navDrop !== false && 
                            <div className="burger-items-container" ref={this.burger}>
                            <div className="burger-items" onClick={ () => getVideos({query: 'beauty'})}>
                                <Link to="/">
                                    <svg>
                                        <use xlinkHref="/images/sprite.svg#icon-drop"></use>
                                    </svg>
                                    <span>Beauty</span> 
                                </Link>
                            </div>
                            <div className="burger-items" onClick={ () => getVideos({query: 'wellness'})}>
                                <Link to="/">
                                <svg>
                                        <use xlinkHref="/images/sprite.svg#icon-slideshare"></use>
                                    </svg>
                                    <span>Wellness</span> 
                                </Link>
                            </div>
                            <div className="burger-items" value="lifestyle" onClick={ () => getVideos({query: 'lifestyle'})}>
                                <Link to="/">
                                    <svg>
                                        <use xlinkHref="/images/sprite.svg#icon-archive"></use>
                                    </svg>
                                    <span>Lifestyle</span> 
                                </Link>
                            </div>
                            <div className="burger-items" value="business" onClick={ () => getVideos({query: 'business'})}>
                                <Link to="/">
                                    <svg>
                                        <use xlinkHref="/images/sprite.svg#icon-briefcase"></use>
                                    </svg>
                                    <span>Business</span> 
                                </Link>
                            </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav