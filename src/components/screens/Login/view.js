import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import postApi from '../../../helpers/fetchPost'

class Login extends Component {

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
      postApi({
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputCreateAccount').value,
        password: document.getElementById('inputPassword').value
        }, 'user')
      window.alert('User Saved')
      document.getElementById('inputName').value = ""
      document.getElementById('inputPassword').value = ""
      document.getElementById('inputCreateAccount').value = ""
      document.getElementById('inputCreateAccount').style.display = 'none'
      document.getElementById('createAccount').style.display = 'flex'
      document.getElementById('buttonLogin').style.display = 'flex'
      document.getElementById('buttonSave').style.display = 'none'
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