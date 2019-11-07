import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Login extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="login">
            <input className="inputLogin" placeholder="name"></input>
            <input className="inputLogin" placeholder="password"></input>
            <input className="inputLogin" placeholder="email"></input>
          </div>
          <div id="buttonsLoginContainer">
            <button className="buttonLogin">Log In</button>
            <button className="buttonLogin">Create Account</button>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Login
