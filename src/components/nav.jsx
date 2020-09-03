import React, { Component } from 'react';

class Nav extends Component {
    constructor() {
        super()
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
        if(this.state.navDrop == true){
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
        return (
            <nav className="nav">
                <div className="nav-logo">
                    <img src="/images/cosmain-logo.png" alt="LOGO" type="image/png"></img>
                    {/* <img src={require('./images/bumper1.png')} /> */}
                </div>
                <div className="nav-browse" ref={this.browser}>
                    <span className="browse-text" onClick={this.navDrop}>
                        Browse ◢
                    </span>
                    {this.state.navDrop && <div className="dropdown">
                        <div className="dropdown-cat1">
                            <ul>
                                <li>Beauty</li>
                            </ul>
                            <a className="list-item">
                                <li>Barber</li>
                            </a>
                            <a className="list-item">
                                <li>Cosmetic Doctor</li>
                            </a>
                            <a className="list-item">
                                <li>Cosmetic Registered Nurse</li>
                            </a>
                            <a className="list-item">
                                <li>Cosmetic Surgeon</li>
                            </a>
                            <a className="list-item">
                                <li>Esthetician</li>
                            </a>
                            <a className="list-item">
                                <li>Hair Stylist</li>
                            </a>
                            <a className="list-item">
                                <li>Lash Technician</li>
                            </a>
                            <a className="list-item">
                                <li>Makeup Artist</li>
                            </a>
                            <a className="list-item">
                                <li>Nail Artist</li>
                            </a>
                            <a className="list-item">
                                <li>Piercing Artist</li>
                            </a>
                            <a className="list-item">
                                <li>Tanning Artist</li>
                            </a>
                            <a className="list-item">
                                <li>Tattoo Artist</li>
                            </a>
                        </div>
                        <div className="dropdown-cat2">
                            <ul>
                                <li>Wellness</li>
                            </ul>
                            <a className="list-item">
                                <li>Acupuncturist</li>
                            </a>
                            <a className="list-item">
                                <li>Athletic Trainer</li>
                            </a>
                            <a className="list-item">
                                <li>Chiropractor</li>
                            </a>
                            <a className="list-item">
                                <li>Dietitian</li>
                            </a>
                            <a className="list-item">
                                <li>Fitness Instructor</li>
                            </a>
                            <a className="list-item">
                                <li>Life &amp; Wellness</li>
                            </a>
                            <a className="list-item">
                                <li>Coach</li>
                            </a>
                            <a className="list-item">
                                <li>Massage Therapist</li>
                            </a>
                            <a className="list-item">
                                <li>Nutritionist</li>
                            </a>
                            <a className="list-item">
                                <li>Physical Therapist</li>
                            </a>
                            <a className="list-item">
                                <li>Psychotherapist</li>
                            </a>
                        </div>
                        <div className="dropdown-cat3">
                            <ul>
                                <li>Popular Services</li>
                            </ul>
                            <a className="list-item">
                                <li>Traditional Chinese Acupuncturist</li>
                            </a>
                            <a className="list-item">
                                <li>Acupuncture</li>
                            </a>
                            <a className="list-item">
                                <li>Balayage</li>
                            </a>
                            <a className="list-item">
                                <li>Body Waxing</li>
                            </a>
                            <a className="list-item">
                                <li>Couples Massage</li>
                            </a>
                            <a className="list-item">
                                <li>Dermal/Cosmetic Filters</li>
                            </a>
                            <a className="list-item">
                                <li>Classic Lash Extensions</li>
                            </a>
                            <a className="list-item">
                                <li>Intense Pulsed Light (IPL)</li>
                            </a>
                            <a className="list-item">
                                <li>Laser Hair Removal</li>
                            </a>
                            <a className="list-item">
                                <li>Manicure</li>
                            </a>
                            <a className="list-item">
                                <li>Microblading</li>
                            </a>
                            <a className="list-item">
                                <li>Pedicure</li>
                            </a>
                            <a className="list-item">
                                <li>Personal Training</li>
                            </a>
                            <a className="list-item">
                                <li>Women's Haircuts</li>
                            </a>
                        </div>
                    </div>}
                </div>
                <div className="nav-search">
                    <input type="text" className="nav-search-input" placeholder="Search Professions"/>
                    <button className="nav-search-button">
                        <svg className="nav-search-icon">
                            <use xlinkHref="/images/sprite.svg#icon-magnifying-glass"></use>
                        </svg>
                    </button>
                </div>
                <div className="nav-login">
                    Log In
                </div>
                <div className="nav-sign-up">
                    Sign Up
                </div>
            </nav>
        )
    }
}
export default Nav