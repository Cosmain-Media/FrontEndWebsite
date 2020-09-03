import React, { Component } from 'react';

class SideNavBar extends Component {
    constructor() {
        super()
        this.state = {
           navDrop: [false,false,false]
        }
      }
    toggle = (int) => {
        let navDrops = [...this.state.navDrop];
        let navDrop = {...navDrops[int]};
        
    }

    navDrop = (e) => {
        if(e.target.id=="beauty"){
            toggleNav(1);
        }
        {/*
        if(e.target.id=="beauty"){
            toggleNav(2);
        }
        if(e.target.id=="beauty"){
            toggleNav(3);
        }
        */}
    }
    render () {
        return (
            <main>
                <div className="side-sticky-menu">
                    <div className="content">
                        <div className="content-body">
                            <div class="dropdown-btn" id="beauty" onClick={this.navDrop}>Beauty</div>
                            <ui class="dropdown-container">
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
                            </ui>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default SideNavBar