import React, { Component } from 'react';
import { AuthService } from '../services/auth';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    componentDidMount() {

    }
    mySubmitHandler =(event) => {
        AuthService.login(this.state.email, this.state.password);
        this.props.history.push('/');
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
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
                    <input type='submit' value='Login' />
                </form>
            </div>
        );
    }
}
export default Login