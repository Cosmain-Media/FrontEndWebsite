import React, { Component } from 'react';

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           navDrop: [true, true, true],
           beautyCat: ['Barber', 'Cosmetic', 'Cosmetic Registered Nurse', 'Cosmetic Surgeon', 'Esthetician', 'Hair Stylist', 'Lash Technician', 'Makeup Artist', 'Nail Artist', 'Piercing Artist', 'Tanning Artist', 'Tattoo Artist'],
           wellCat: ['Acupuncturist', 'Athletic Trainer', 'Chiropractor', 'Dietician', 'Fitness Instructor', 'Life & Wellness Coach', 'Massage Therapist', 'Nutritionist', 'Phsyical Therapist', 'Psychotherapist'],
           popCat: ['Traditional Chinese Acupuncturist', 'Acupuncture', 'Balayage', 'Body Waxing', 'Couples Massage', 'Dermal/Cosmetic Filters', 'Classic Lash Extensions', 'Intense Pulsed Light (IPL)', 'Laser Hair Removal', 'Manicure', 'Microblading', 'Pedicure', 'Personal Training', 'Women\'s Haircuts']
        }
    }

    toggleNav = (int) => {
        this.setState(state => {
            const navDrop = state.navDrop.map((data, index) => {
                if (index === int) {
                    return !data;
                } else {
                    return data;
                }
            });
            return {
              navDrop
            };
          });
          console.log(this.state.navDrop);
    }
       
    navDrop = (e) => {
        if(e.target.id === "beauty"){
            this.toggleNav(0);
        }
        if(e.target.id === "wellness"){
            this.toggleNav(1);
        }
        if(e.target.id === "popular"){
            this.toggleNav(2);
        }
    }

    render () {
        const {changeProfessional} = this.props;
        console.log("-------sidenavbar----------");
        return (
            <main>
                <div className="side-sticky-menu">
                    <div className="content">
                        <div className="content-body">
                            <div className="dropdown-btn" id="beauty" onClick={this.navDrop}>Beauty</div>
                            <div className="dropdown-container">
                                {this.state.navDrop.map((data, index) => {
                                    if (index===0 && data) {
                                        return (
                                            this.state.beautyCat !== null && this.state.beautyCat.map( profession => 
                                                <div className="list-item" onClick={ () => { changeProfessional(profession) } }>
                                                    <a>{profession}</a>
                                                </div>
                                            )
                                        )
                                    }
                                })}
                            </div>
                            <div className="dropdown-btn" id="wellness" onClick={this.navDrop}>Wellness</div>
                            <div className="dropdown-container">
                                {this.state.navDrop.map((data, index) => {
                                    if (index===1 && data) {
                                        return (
                                            this.state.wellCat !== null && this.state.wellCat.map( profession =>
                                                <div className="list-item" onClick={ () => { changeProfessional(profession) } }>
                                                    <a>{profession}</a>
                                                </div>
                                            )
                                        )
                                    } 
                                })}
                            </div>   
                            <div className="dropdown-btn" id="popular" onClick={this.navDrop}>Popular Services</div>
                            <div className="dropdown-container">
                                {this.state.navDrop.map((data, index) => {
                                    if (index===2 && data) {
                                        return (
                                            this.state.popCat !== null && this.state.popCat.map( profession =>
                                                <div className="list-item" onClick={ () => { changeProfessional(profession) } }>
                                                    <a>{profession}</a>
                                                </div>
                                            )
                                        )
                                    } 
                                })}
                            </div>    
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default SideNavBar