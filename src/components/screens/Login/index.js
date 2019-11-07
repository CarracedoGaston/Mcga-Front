import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Login extends Component {
  constructor(props) {
    super(props)
    this.createAccount = this.createAccount.bind(this)
  }
  createAccount() {
    document.getElementById('inputCreateAccount').style.display = 'flex'
    document.getElementById('createAccount').style.display = 'none'
    document.getElementById('buttonLogin').style.display = 'none'
    document.getElementById('buttonSave').style.display = 'flex'
  }
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="login">
            <input className="inputLogin" placeholder=" Name"></input>
            <input className="inputLogin" placeholder=" Password"></input>
            <input id="inputCreateAccount" placeholder=" Email"></input>
          </div>
          <div id="buttonsLoginContainer">
            <div id="createAccount" onClick={this.createAccount}>Create Account</div>
            <button id="buttonLogin" className="buttonLogin">Log In</button>
            <button id="buttonSave" className="buttonLogin">Save</button>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Login
