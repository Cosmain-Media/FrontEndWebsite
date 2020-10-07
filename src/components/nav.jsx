import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
           navDrop: false,
           beautyCat: ['Barber', 'Cosmetic Doctor', 'Cosmetic Registered Nurse', 'Cosmetic Surgeon', 'Esthetician', 'Hair Stylist', 'Lash Technician', 'Makeup Artist', 'Nail Artist', 'Piercing Artist', 'Tanning Artist', 'Tattoo Artist'],
           wellCat: ['Acupuncturist', 'Athletic Trainer', 'Chiropractor', 'Dietician', 'Fitness Instructor', 'Life & Wellness Coach', 'Massage Therapist', 'Nutritionist', 'Phsyical Therapist', 'Psychotherapist'],
           popCat: ['Traditional Chinese Acupuncturist', 'Acupuncture', 'Balayage', 'Body Waxing', 'Couples Massage', 'Dermal/Cosmetic Filters', 'Classic Lash Extensions', 'Intense Pulsed Light (IPL)', 'Laser Hair Removal', 'Manicure', 'Microblading', 'Pedicure', 'Personal Training', 'Women\'s Haircuts']
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
        const {changeProfessional} = this.props;
        
        return (
            <div className="nav-container">
                <nav className="nav" style={{display: "grid"}}>
                    <div className="nav-logo">
                        <img src={process.env.PUBLIC_URL + '/cosmain-logo.png'} />
                    </div>

                    <div className="nav-browse" ref={this.browser}>
                        <h1 className="nav-browse-text" onClick={this.navDrop}>
                            Browse ◢
                        </h1>
                        {this.state.navDrop && <div className="nav-browse-dropdown">
                            <div className="nav-browse-dropdown-catContainer">
                                <div className="nav-browse-dropdown-catContainer-cat1">
                                    <ul>
                                        <li className="list-title"><b>Beauty</b></li>
                                        
                                        {this.state.beautyCat !== null && this.state.beautyCat.map( profession => 
                                                <a href='/videos' className="list-item" onClick={ () => { changeProfessional(profession) } }>
                                                    <li>{profession}</li>
                                                </a>
                                        )}
                                    </ul>
                                </div>
                                <div className="nav-browse-dropdown-catContainer-cat2">
                                    <ul>
                                        <li className="list-title"><b>Wellness</b></li>
                                        {this.state.wellCat !== null && this.state.wellCat.map( profession => 
                                                <a href='/videos' className="list-item" onClick={ () => { changeProfessional(profession) } }>
                                                    <li>{profession}</li>
                                                </a>
                                        )}
                                    </ul>
                                </div>
                                <div className="nav-browse-dropdown-catContainer-cat3">
                                    <ul>
                                        <li className="list-title"><b>Popular Services</b></li>
                                        {this.state.popCat !== null && this.state.popCat.map( profession => 
                                                <a href='/videos' className="list-item" onClick={ () => { changeProfessional(profession) } }>
                                                    <li>{profession}</li>
                                                </a>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="nav-browse-dropdown-otherContainer">
                                <h3>
                                    All Content
                                </h3>
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
        </div>
        )
    }
}
export default Nav