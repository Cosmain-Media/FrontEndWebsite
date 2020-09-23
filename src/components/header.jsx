import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import place1 from '../images/coming_soon1.png';
import place2 from '../images/coming_soon2.png';
import place3 from '../images/coming_soon3.png'

class Header extends Component {
    render () {
        return (
            <div className="car-container">
                <Carousel>
                    <Carousel.Item>
                        <div className="car-container-slide">
                            <div>
                                <img src={place1} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="car-container-slide">
                            <div>
                                <img src={place2} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="car-container-slide">
                            <div>
                                <img src={place3} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Header