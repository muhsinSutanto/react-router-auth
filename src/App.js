import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from './components/Home';
import Employees from './components/Employees';
import Login from './components/Login';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  handleLogin = (email, password) => {
    axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`, {
      email: email,
      password: password
    }) 
    .then( res => {
      localStorage.setItem("token", res.data.token)
      this.setState({
        isAuthenticated : true
      })
    })
    .catch(err => console.log(err))
  }

  handleLogout = () => {
    this.setState({
      isAuthenticated: false
    });
    localStorage.removeItem('token')
  }

  render() {
    return (
      <Router>
        <div>
          <div className='navigation-bar'>
            <div>
              <Link to='/'> Home </Link> |
              <Link to='/Employees'> Employees </Link> 
            </div>
              <Link to='/Login'> Login </Link>
          </div>
          <hr />

          <Route exact path ='/' component={Home} />
          <Route 
            path='/Employees' 
            render={props => (
              <Employees isAuthenticated={this.state.isAuthenticated}
              {...props} />)}
           />
          <Route />
          <Route 
            path='/Login' 
            render={props => (
              <Login isAuthenticated={this.state.isAuthenticated}
              handleLogin = {this.handleLogin}
              {...props} />)}
           />
          <Route />
          

        </div>
      </Router>
    );
  }
}

export default App;
