import React, { Component } from 'react';
import SideNavSection from '../components/sideNavBar';
import VideoLayout from '../components/vidLayout';

class FilterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null,
            searchDropDown: false
        }
    }

    handleSearch = (e) => {
        e.persist()
        this.setState({search: e.target.value})

        let timeout = null;

        clearTimeout(timeout);

        timeout = setTimeout( async () => {
            this.props.searchTags(e, this.state.search)
        }, 300)
    }

    onFocus = () => {
        this.setState({searchDropDown: true})
    }

    handleSearchDropDown = () => {
        this.setState({searchDropDown: false})
    }
    
    render () {
        const { videos, searchTags, error, tags, getVideos } = this.props
        let dynamicTags = null
        if(tags === null){
            dynamicTags = videos.Trending
        }else{
            dynamicTags = tags
        }

        return (
            <div className="filterpage">
                <span>{error}</span>
                <div className="filterpage-main">
                    <div className="filterpage-main-header">                        
                        <h1 className="filterpage-main-header-category">{this.props.currentCategory} Videos</h1>
                        <form className="filterpage-main-header-search" onSubmit={ (e) => { searchTags(e, this.state.search)}}>
                            <input type="text" className={`filterpage-main-header-search-input ${this.state.searchDropDown == true ? `search-dropdown` : ''}`} placeholder="Search Tags" onChange={this.handleSearch} onFocus={this.onFocus}/>
                            <button className="filterpage-main-header-search-button">
                                <svg className="filterpage-main-header-search-icon">
                                    <use xlinkHref="/images/sprite.svg#icon-magnifying-glass"></use>
                                </svg>
                            </button>
                            <div className={`filterpage-main-background ${this.state.searchDropDown == true ? `search-dropdown` : ''}`}>&nbsp;</div>
                            <ul className={`filterpage-main-header-phone-relatedTags list ${this.state.searchDropDown == true ? `search-dropdown` : ''}`}>
                            { dynamicTags !== null && <li className="filterpage-main-header-phone-relatedTags-heading">Related Tags</li>}
                            { dynamicTags !== null && dynamicTags.map( (v, i) => (
                                v.tags.map( (t, i ) => (
                                    <div key={i}>
                                        { this.state.search === null ? <li key={i} className="filterpage-main-header-phone-relatedTags-tags" onClick={ () => {getVideos(t); this.handleSearchDropDown();}}>{t}</li> : t.includes(this.state.search)  ? <li key={i} className="filterpage-main-header-phone-relatedTags-tags" onClick={ () => {getVideos(t); this.handleSearchDropDown();}}>{t}</li> : null} 
                                    </div>
                                    
                                ))                                
                            ))}                            
                        </ul>
                        </form>
                        <ul className="filterpage-main-header-relatedTags list">
                            { dynamicTags !== null && <li className="filterpage-main-header-relatedTags-heading">Related Tags</li>}
                            { dynamicTags !== null && dynamicTags.map( (v, i) => (
                                v.tags.map( (t, i ) => (
                                    <div key={i}>
                                        { this.state.search === null ? <li key={i} className="filterpage-main-header-relatedTags-tags" onClick={ () => getVideos(t)}>{t}</li> : t.includes(this.state.search)  ? <li key={i} className="filterpage-main-header-relatedTags-tags" onClick={ () => getVideos(t)}>{t}</li> : null} 
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
                            {this.props.videos.Trending.length > 0 &&
                                <h1 className="video-heading">
                                    Most Popular
                                </h1>
                            }
                            <VideoLayout videos={this.props.videos.Trending} />
                            {this.props.videos.Tutorial.length > 0 && 
                                <h1 className="video-heading">
                                    Tutorials
                                </h1>
                            }
                            <VideoLayout videos={this.props.videos.Tutorial} />
                            {this.props.videos.Interview.length > 0 && 
                                <h1 className="video-heading">
                                    Interviews
                                </h1>
                            }
                            <VideoLayout videos={this.props.videos.Interview} />
                            {this.props.videos.Blog.length > 0 && 
                                <h1 className="video-heading">
                                    Blogs
                                </h1>
                            }
                            <VideoLayout videos={this.props.videos.Blog} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FilterPage