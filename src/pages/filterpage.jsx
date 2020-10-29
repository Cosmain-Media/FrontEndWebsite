import React, { Component } from 'react';
import SideNavSection from '../components/sideNavBar';
import VideoLayout from '../components/vidLayout';

class FilterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null
        }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }
    
    render () {
        const { videos, searchTags, error, tags, getVideos } = this.props

        let dynamicTags = null
        if(tags === null){
            dynamicTags = videos.Trending
        }else{
            console.log(tags)
            dynamicTags = tags
        }

        return (
            <div className="filterpage">
                <span>{error}</span>
                <div className="filterpage-main">
                    <div className="filterpage-main-header">
                        <h1 className="filterpage-main-header-category">{this.props.currentCategory} Videos</h1>
                        <form className="filterpage-main-header-search" onSubmit={ (e) => { searchTags(e, this.state.search)}}>
                            <input type="text" className="filterpage-main-header-search-input" placeholder="Search Tags" onChange={this.handleChange}/>
                            <button className="filterpage-main-header-search-button">
                                <svg className="filterpage-main-header-search-icon">
                                    <use xlinkHref="/images/sprite.svg#icon-magnifying-glass"></use>
                                </svg>
                            </button>
                        </form>
                        <ul className="filterpage-main-header-relatedTags list">
                            <li className="filterpage-main-header-relatedTags-heading">Related Tags</li>
                            { dynamicTags !== null && dynamicTags.map( (v, i) => (
                                v.tags.map( (t, i ) => (
                                    <div key={i}>
                                        {t.includes(this.state.search) ? <li key={i} className="filterpage-main-header-relatedTags-tags" onClick={ () => getVideos(t)}>{t}</li> : null} 
                                    </div>
                                    
                                ))                                
                            ))}                            
                        </ul>
                        {/* <div className="filterpage-main-header-featured">
                            <div className="filterpage-main-header-featured-image">
                                <img className="border-radius-left-corners" src="https://images.unsplash.com/photo-1599689018034-48e2ead82951?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt=""/>
                            </div>
                            <div className="filterpage-main-header-featured-image">
                                <img src="https://images.unsplash.com/photo-1599703170453-e0faceaa79ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
                            </div>
                            <div className="filterpage-main-header-featured-content">
                                <h1 className="filterpage-main-header-featured-content-heading">Photography: Tell a Thousand Words Through Pictures</h1>
                                <div className="filterpage-main-header-featured-content-professor">
                                    <div className="filterpage-main-header-featured-content-professor-image">
                                        <img src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                                    </div>
                                    <div className="filterpage-main-header-featured-content-professor-shortDescription">
                                        <span className="filterpage-main-header-featured-content-professor-shortDescription-name">Nikkolas Smith</span>
                                        <span className="filterpage-main-header-featured-content-professor-shortDescription-profession">Concept Photographer / Illustrator / Editor</span>
                                        <span className="filterpage-main-header-featured-content-professor-shortDescription-followers">5098 students</span>
                                    </div>
                                </div>
                                <span className="filterpage-main-header-featured-content-time">1h 38min</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="video">
                        <div className="video-container">
                            <h1 className="video-heading">
                                Most Popular
                            </h1>
                            <VideoLayout videos={this.props.videos.Trending} />
                            <h1 className="video-heading">
                                Tutorials
                            </h1>
                            <VideoLayout videos={this.props.videos.Tutorial} />
                            <h1 className="video-heading">
                                Interviews
                            </h1>
                            <VideoLayout videos={this.props.videos.Interview} />
                            <h1 className="video-heading">
                                Blogs
                            </h1>
                            <VideoLayout videos={this.props.videos.Blog} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FilterPage