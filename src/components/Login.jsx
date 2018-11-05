import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email : '',
            password : ''
         }
    }
    render() { 
        return ( 
            <div>
                <p> Login Page </p>
            </div>
         );
    }
}
 
export default Login;