import React, { Component } from 'react';
import {Redirect} from  'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email : '',
            password : ''
         }
    }

    handleOnChange = e => {
        this.setState({
        [e.target.name] : e.target.value })
    }

    render() {
        const {email, password} = this.state 

        if (this.props.isAuthenticated === true) {
            return <Redirect to='/Employees' />;
        } else {
            return ( 
                <div>
                    <p> Login Page </p>
                    <input 
                        type='email' 
                        name='email' 
                        value={this.state.email}
                        placeholder={this.state.email}
                        onChange={this.handleOnChange}
                    />
    
                    <br />
    
                    <input 
                        type='password' 
                        name='password' 
                        value={this.state.password}
                        placeholder={this.state.password}
                        onChange={this.handleOnChange}
                    />
    
                    <br />
    
                    <button onClick={()=> this.props.handleLogin(email, password)}>Login</button>
                        
                </div>
             );
        }
    }
}
 
export default Login;