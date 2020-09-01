//This file is the entry point for the project
import React, {Component} from 'react';
import BrowseArea from "./BrowseArea/BrowseArea";

class Main extends Component {
    render() {
        return (
            <div>
                <h1>This is Main.js</h1>
                <BrowseArea/>
            </div>
        );
    }
}

export default Main;