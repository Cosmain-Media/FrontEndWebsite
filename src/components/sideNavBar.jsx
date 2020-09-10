import React, { Component } from 'react';

class SideNavBar extends Component {
    constructor() {
        super()
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
        if(e.target.id=="wellness"){
            this.toggleNav(1);
        }
        if(e.target.id=="popular"){
            this.toggleNav(2);
        }
    }
    render () {
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
                                            <a>Barber</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Cosmetic Doctor</a>
                                        </div>
                                        <div className="list-item">
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
                                        <div className="list-item">
                                            <a>Acupuncturist</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Athletic Trainer</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Chiropractor</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Dietitian</a>
                                        </div>
                                        <div className="list-item">
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
                                        <div className="list-item">
                                            <a>Traditional Chinese Acupuncturist</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Acupuncture</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Balayage</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Body Waxing</a>
                                        </div>
                                        <div className="list-item">
                                            <a>Couples Massage</a>
                                        </div>
                                        <div className="list-item">
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