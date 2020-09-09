import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


class Footer extends Component {
    render () {

        return (
            <div className="footer-container">
                <div className="footer-container-wrapper">
                    
                    <h1>Cosmain</h1> <br/>
                    <p>Cosmain is California's largest database of working beauty and wellness professionals. Search, compare, and connect with the industries best.</p> <br/>
                    <hr/> <br/>
                    <ul className="footer-container-ul">
                        <li> @ 2020</li>
                        <li><a href="https://media.cosmain.com/"> Cosmain</a></li>
                        <li> All Rights Reserved</li>
                        <li><a href="https://www.cosmain.com/about/terms"> Terms of Use</a></li>
                        <li><a href="https://www.cosmain.com/about/privacy"> Privacy Policy</a></li>
                    </ul>
                    <div className='social-media-links'>
                        <a className="media-link facebook" href="https://www.facebook.com/Cosmainusa" target="_blank" title="Cosmain Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="media-link twitter" href="https://twitter.com/CosmainUSA" target="_blank" title="Cosmain Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="media-link youtube" href="https://www.youtube.com/channel/UCkG2U_6acwkGhgV_XJpy7ig?view_as=subscriber" target="_blank" title="Cosmain YouTube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a className="media-link instagram" itemprop="sameAs" href="https://www.instagram.com/cosmainusa/" target="_blank" title="Cosmain Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer