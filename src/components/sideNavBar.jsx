import React, { Component } from 'react';

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           navDrop: [true, true, true]
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

        return (
            <main>
                <div className="side-sticky-menu">
                    <div className="content">
                        <div className="content-body">
                            <div className="dropdown-btn" id="beauty" onClick={this.navDrop}>Beauty</div>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===0 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
                                        <div className="list-item active" onClick={ () => { changeProfessional('Barber') } }>
                                            <a>Barber</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Cosmetic Doctor') } }>
                                            <a>Cosmetic Doctor</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Cosmetic Registered Nurse') } }>
                                            <a>Cosmetic Registered Nurse</a>
                                        </div>
                                    </ul>
                                    );
                                } 
                            })}  
                            <div className="dropdown-btn" id="wellness" onClick={this.navDrop}>Wellness</div>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===1 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
                                        <div className="list-item" onClick={ () => { changeProfessional('Acupuncturist') } }>
                                            <a>Acupuncturist</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Athletic Trainer') } }>
                                            <a>Athletic Trainer</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Chiropractor') } }>
                                            <a>Chiropractor</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Dietitian') } }>
                                            <a>Dietitian</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Fitness Instructor') } }>
                                            <a>Fitness Instructor</a>
                                        </div>
                                    </ul>
                                    );
                                } 
                            })}   
                            <div className="dropdown-btn" id="popular" onClick={this.navDrop}>Popular Services</div>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===2 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
                                        <div className="list-item" onClick={ () => { changeProfessional('Traditional Chinese Acupuncturist') } }>
                                            <a>Traditional Chinese Acupuncturist</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Acupuncture') } }>
                                            <a>Acupuncture</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Balayage') } }>
                                            <a>Balayage</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Body Waxing') } }>
                                            <a>Body Waxing</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Couples Massage') } }>
                                            <a>Couples Massage</a>
                                        </div>
                                        <div className="list-item" onClick={ () => { changeProfessional('Dermal/Cosmetic Filters') } }>
                                            <a>Dermal/Cosmetic Filters</a>
                                        </div>
                                    </ul>
                                    );
                                } 
                            })}    
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default SideNavBar