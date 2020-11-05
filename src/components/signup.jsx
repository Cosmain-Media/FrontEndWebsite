import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AuthService} from '../services/auth';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }
    mySubmitHandler = (event) => {
        AuthService.createUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
        this.props.history.push('/');  
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(val);
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <p>First Name:</p>
                <input
                    type='text'
                    name='firstName'
                    onChange={this.myChangeHandler}
                />
                <p>Last Name:</p>
                <input
                    type='text'
                    name='lastName'
                    onChange={this.myChangeHandler}
                />
                <p>Email:</p>
                <input
                    type='text'
                    name='email'
                    onChange={this.myChangeHandler}
                />
                <p>Password:</p>
                <input
                    type='text'
                    name='password'
                    onChange={this.myChangeHandler}
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Signup;