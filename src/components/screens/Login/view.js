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
  
  add = () => {
    if (
      document.getElementById('inputName').value !== "" &&
      document.getElementById('inputPassword').value !== "" &&
      document.getElementById('inputCreateAccount').value !== ""
    ){
      this.props.addUsers()
      window.alert('User Saved')
      document.getElementById('inputName').value = ""
      document.getElementById('inputPassword').value = ""
      document.getElementById('inputCreateAccount').value = ""
    }
    else {
      window.alert('Complete all the data')
      return
    } 
  }

  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="login">
            <input className="inputLogin" id="inputName" placeholder=" Name"></input>
            <input className="inputLogin"  id="inputPassword" placeholder=" Password"></input>
            <input id="inputCreateAccount" placeholder=" Email"></input>
          </div>
          <div id="buttonsLoginContainer">
            <div id="createAccount" onClick={this.createAccount}>Create Account</div>
            <button id="buttonLogin" className="buttonLogin">Log In</button>
            <button id="buttonSave" className="buttonLogin" onClick={this.add}>Save</button>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Login