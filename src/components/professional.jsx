import React, { Component } from 'react';
import ProfessionalService from '../services/professional'

class Professional extends Component {
    constructor() {
        super()
    }
    
    componentDidMount() {
      const test = ProfessionalService.createProfessional()
        console.log(test) 
    }
    componentWillUnmount() {

    }

    testCreate = () => {
        const test = ProfessionalService.createProfessional()
        console.log(test)
    }

    render () {
        return (
            <div>
                <div className='profile'>
                    <div className="profile-container">
                        <div className="profile-container-grid">
                            <div className='img-wrapper'>
                                <img src={"https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg"}  alt=""/>
                            </div>
                            <div className='description'>
                                    <div className="description-name">James Kim</div>
                                    <div className="description-profession">Barber</div>
                            </div>
                            <div className='button-container'>
                                <button className ='cosmain-link' onClick={this.testCreate}>Learn More</button> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video">
                    <div className="video-container">
                        <h1 className="video-heading">
                            Most Popular
                        </h1>
                        <div className="video-slidebar">
                            <div className="video-slidebar-container">
                                <div className="video-slidebar-container-iframe">
                                    <iframe src="https://www.youtube.com/embed/HCv563TfnVY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className="video-slidebar-container-description">
                                    <span className="video-slidebar-container-description-students">4,873 students</span>
                                    <span className="video-slidebar-container-description-time">45 min</span>
                                    <span className="video-slidebar-container-description-heading">Increase your sales, and get more loyal customers</span>
                                    <span className="video-slidebar-container-description-professor">Stephen</span>
                                    <span className="video-slidebar-container-description-bookmark">
                                        <svg className="video-slidebar-container-description-bookmark-icon">
                                            <use xlinkHref="/images/sprite.svg#icon-bookmark"></use>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="video-slidebar-container">
                                <div className="video-slidebar-container-iframe">
                                    <iframe src="https://www.youtube.com/embed/HCv563TfnVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-slidebar-container-description">
                                    <span className="video-slidebar-container-description-students">4,873</span>
                                    <span className="video-slidebar-container-description-time">45min</span>
                                    <span className="video-slidebar-container-description-heading">Increase your sales, and get more loyal customers</span>
                                    <span className="video-slidebar-container-description-professor">Stephen</span>
                                    <span className="video-slidebar-container-description-bookmark">
                                        <svg className="video-slidebar-container-description-bookmark-icon">
                                            <use xlinkHref="/images/sprite.svg#icon-bookmark"></use>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="video-slidebar-container">
                                <div className="video-slidebar-container-iframe">
                                    <iframe src="https://www.youtube.com/embed/HCv563TfnVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-slidebar-container-description">
                                    <span className="video-slidebar-container-description-students">4,873</span>
                                    <span className="video-slidebar-container-description-time">45min</span>
                                    <span className="video-slidebar-container-description-heading">Increase your sales, and get more loyal customers</span>
                                    <span className="video-slidebar-container-description-professor">Stephen</span>
                                    <span className="video-slidebar-container-description-bookmark">
                                        <svg className="video-slidebar-container-description-bookmark-icon">
                                            <use xlinkHref="/images/sprite.svg#icon-bookmark"></use>
                                        </svg>
                                    </span>
                                </div>
                            </div>                        
                        </div>
                        <h1 className="video-heading">
                            Interviews
                        </h1>
                        <div className="video-slidebar">
                            <div className="video-slidebar-container">
                                <div className="video-slidebar-container-iframe">
                                    <iframe src="https://www.youtube.com/embed/HCv563TfnVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-slidebar-container-description">
                                    <span className="video-slidebar-container-description-students">4,873</span>
                                    <span className="video-slidebar-container-description-time">45min</span>
                                    <span className="video-slidebar-container-description-heading">Increase your sales, and get more loyal customers</span>
                                    <span className="video-slidebar-container-description-professor">Stephen</span>
                                    <span className="video-slidebar-container-description-bookmark">&#8364;</span>
                                </div>
                            </div>
                            <div className="video-slidebar-container">
                                <div className="video-slidebar-container-iframe">
                                    <iframe src="https://www.youtube.com/embed/HCv563TfnVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-slidebar-container-description">
                                    <span className="video-slidebar-container-description-students">4,873</span>
                                    <span className="video-slidebar-container-description-time">45min</span>
                                    <span className="video-slidebar-container-description-heading">Increase your sales, and get more loyal customers</span>
                                    <span className="video-slidebar-container-description-professor">Stephen</span>
                                    <span className="video-slidebar-container-description-bookmark">&#8364;</span>
                                </div>
                            </div>
                            <div className="video-slidebar-container">
                                <div className="video-slidebar-container-iframe">
                                    <iframe src="https://www.youtube.com/embed/HCv563TfnVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-slidebar-container-description">
                                    <span className="video-slidebar-container-description-students">4,873</span>
                                    <span className="video-slidebar-container-description-time">45min</span>
                                    <span className="video-slidebar-container-description-heading">Increase your sales, and get more loyal customers</span>
                                    <span className="video-slidebar-container-description-professor">Stephen</span>
                                    <span className="video-slidebar-container-description-bookmark">&#8364;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        )
    }
}

export default Professional