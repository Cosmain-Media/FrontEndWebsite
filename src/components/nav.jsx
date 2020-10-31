import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
           navDrop: false,
           navDropPhone: false,
        }
    }

    burger = React.createRef()
    
    componentDidMount() {
        document.addEventListener("mousedown", this.onClickOutside);
    }

    onClickOutside = event => {
        if (this.burger.current && !this.burger.current.contains(event.target)) {
            this.setState({
                navDrop: false
            })
        }
    }

    navDrop = (e) => {
        this.setState({navDrop: !this.state.navDrop, navDropPhone: !this.state.navDropPhone})
    }

    render () {
        const { getVideos } = this.props
        
        return (
            <div>
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/">
                        <svg>
                            <use xlinkHref="/images/sprite.svg#icon-logo"></use>
                        </svg>
                    </Link>
                </div>
                <div className="nav-menu">
                    <div className="nav-menu-items burger">
                        <svg ref={this.burger} className="burger-menu burger-menu-icon" onMouseEnter={ (e) => this.navDrop(e)} onClick={ (e) => this.navDrop(e)}>
                            <use xlinkHref="/images/sprite.svg#icon-menu3"></use>
                        </svg>
                        
                        {this.state.navDrop !== false && 
                            <div className="burger-items-container">
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
                {this.state.navDropPhone !== false && 
                    <div className="phone-burger-items-container">
                        <div className="phone-burger-items" onClick={ () => getVideos({query: 'beauty'})}>
                            <Link to="/">
                                <svg>
                                    <use xlinkHref="/images/sprite.svg#icon-drop"></use>
                                </svg>
                                <span>Beauty</span> 
                            </Link>
                        </div>
                        <div className="phone-burger-items" onClick={ () => getVideos({query: 'wellness'})}>
                            <Link to="/">
                            <svg>
                                    <use xlinkHref="/images/sprite.svg#icon-slideshare"></use>
                                </svg>
                                <span>Wellness</span> 
                            </Link>
                        </div>
                        <div className="phone-burger-items" value="lifestyle" onClick={ () => getVideos({query: 'lifestyle'})}>
                            <Link to="/">
                                <svg>
                                    <use xlinkHref="/images/sprite.svg#icon-archive"></use>
                                </svg>
                                <span>Lifestyle</span> 
                            </Link>
                        </div>
                        <div className="phone-burger-items" value="business" onClick={ () => getVideos({query: 'business'})}>
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
        )
    }
}
export default Nav