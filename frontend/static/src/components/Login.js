import React, {Component} from 'react';

import {TextInput, Button} from 'react-materialize';

import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/accounts/login/',
            data: JSON.stringify(this.state)
        });
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput label="Email" name="email" value={this.state.email} onChange={this.handleInput}/>
                <TextInput password label="Password" name="password" value={this.state.password}
                           onChange={this.handleInput}/>
                <Button type="submit" waves="light">
                    Submit
                </Button>
            </form>

        )
    }
}

export default Login;
