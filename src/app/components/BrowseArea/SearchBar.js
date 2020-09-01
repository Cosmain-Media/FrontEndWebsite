import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = this.createState(props); // copy the props so we can handle the search logic here

    }

    createState(props) {
        let state = {
            allCategories: props.allCategories,
            allProfessionals: props.allProfessionals,
            searchBarInputValue: '',
        }

        return state
    }

    searchBarFilterOnChange = (event) => {
        console.log("searchBarFilterOnChange activated", event.target.value)

        this.setState({
            searchBarInputValue: event.target.value
        })

    }

    render() {
        return (
          <h1>This is SearchBar</h1>
        );
    }
}

export default SearchBar;