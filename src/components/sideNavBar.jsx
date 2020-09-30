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
                                        <div className="list-item active">
                                            <a onClick={ () => { changeProfessional('Barber') } } >Barber</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Cosmetic Doctor') } } >Cosmetic Doctor</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Cosmetic Registered Nurse') } } >Cosmetic Registered Nurse</a>
                                        </div>
                                    </ul>
                                    );
                                } 
                            })}  
                            <div className="dropdown-btn" id="wellness" onClick={this.navDrop}>Wellness</div>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===1 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Acupuncturist') } } >Acupuncturist</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Athletic Trainer') } } >Athletic Trainer</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Chiropractor') } } >Chiropractor</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Dietitian') } } >Dietitian</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Fitness Instructor') } } >Fitness Instructor</a>
                                        </div>
                                    </ul>
                                    );
                                } 
                            })}   
                            <div className="dropdown-btn" id="popular" onClick={this.navDrop}>Popular Services</div>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===2 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Traditional Chinese Acupuncturist') } } >Traditional Chinese Acupuncturist</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Acupuncture') } } >Acupuncture</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Balayage') } } >Balayage</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Body Waxing') } } >Body Waxing</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Couples Massage') } } >Couples Massage</a>
                                        </div>
                                        <div className="list-item">
                                            <a onClick={ () => { changeProfessional('Dermal/Cosmetic Filters') } } >Dermal/Cosmetic Filters</a>
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