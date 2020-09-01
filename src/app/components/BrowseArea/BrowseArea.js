import React, {Component} from 'react';
import SearchBar from "./SearchBar";

class BrowseArea extends Component{
    constructor() {
        super();

        this.state = {
            allCategories: [],
            allProfessionals: [],
        }
    }
    render() {
        return(
            <SearchBar/>
        );
    }
}

export default BrowseArea;