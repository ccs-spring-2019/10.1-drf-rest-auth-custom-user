import React, { Component } from 'react';

import axios from 'axios';


// import {Button, Icon} from 'react-materialize';

class About extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.registerUser();
    }

    registerUser = () => {
        let user = {};
        user.email = 'jeffwho@example.com';
        user.password1 = 'safepass1';
        user.password2 = 'safepass1';
        user.name = 'jeff smith';
        user.username='jeff who this'

        axios.post('/api/v1/rest-auth/registration/', user)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }

    render() {
        return (
            <div>
                I am the About
            </div>

        )
    }
}

export default About;
