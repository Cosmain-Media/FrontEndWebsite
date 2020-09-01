import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = props; // copy the props so we can handle the search logic here
    }

    render() {
        return (
          <h1>This is SearchBar</h1>
        );
    }
}

export default SearchBar;