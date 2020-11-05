import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


class Footer extends Component {
    render () {

        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-about">
                        <h1 className="footer-about-heading">Cosmain</h1> <br/>
                        <p className="footer-about-description">Cosmain is California's largest database of working beauty and wellness professionals. Search, compare, and connect with the industries best.</p> 
                    </div>
                    <div className="footer-copyright">
                        <ul className="footer-copyright-links">
                            <li> @ 2020</li>
                            <li>Cosmain All Rights Reserved</li>
                            <li><a href="https://www.cosmain.com/about/terms"> Terms of Use</a></li>
                            <li><a href="https://www.cosmain.com/about/privacy"> Privacy Policy</a></li>
                        </ul>
                        <div className='footer-copyright-social-media'>
                            <a className="media-link facebook" href="https://www.facebook.com/Cosmainusa" target="_blank" title="Cosmain Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className="media-link twitter" href="https://twitter.com/CosmainUSA" target="_blank" title="Cosmain Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="media-link youtube" href="https://www.youtube.com/channel/UCkG2U_6acwkGhgV_XJpy7ig?view_as=subscriber" target="_blank" title="Cosmain YouTube">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a className="media-link instagram" itemProp="sameAs" href="https://www.instagram.com/cosmainusa/" target="_blank" title="Cosmain Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Footer