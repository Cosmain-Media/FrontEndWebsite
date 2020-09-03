import React, { Component } from 'react';

class SideNavBar extends Component {
    constructor() {
        super()
        this.state = {
           navDrop: [false, false, false]
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
<<<<<<< HEAD
        if(e.target.id=="beauty"){
=======
        if(e.target.id === "beauty"){
            this.toggleNav(0);
>>>>>>> SideNavBar
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
                            <button className="dropdown-btn" id="beauty" onClick={this.navDrop}>Beauty</button>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===0 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
                                        <a className="list-item">
                                            <li>Barber</li>
                                        </a>
                                        <a className="list-item">
                                            <li>Cosmetic Doctor</li>
                                        </a>
                                        <a className="list-item">
                                            <li>Cosmetic Registered Nurse</li>
                                        </a>
                                    </ul>
                                    );
                                } 
                            })}  
                            <button className="dropdown-btn" id="wellness" onClick={this.navDrop}>Wellness</button>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===1 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
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
                                    </ul>
                                    );
                                } 
                            })}   
                            <button className="dropdown-btn" id="popular" onClick={this.navDrop}>Popular Services</button>
                            {this.state.navDrop.map(function(data, index){
                                 if (index===2 && data ===true) {
                                    return (<ul className="dropdown-container" key={index}>
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