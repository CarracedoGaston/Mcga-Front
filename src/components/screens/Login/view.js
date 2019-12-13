import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { fetchPost } from '../../../helpers/fetch'

class Login extends Component {

  createAccount() {
    document.getElementById('inputCreateAccount').style.display = 'flex'
    document.getElementById('createAccount').style.display = 'none'
    document.getElementById('buttonLogin').style.display = 'none'
    document.getElementById('buttonSave').style.display = 'flex'
  }

  loginAccount = () => {
    fetchPost('user/signIn/', {
      name: document.getElementById('inputName').value,
      password: document.getElementById('inputPassword').value
    })
    .then(data  => {
      if (data.msg !== 'Invalid Email or password') {
        // localStorage.setItem('user', data.user)
      localStorage.setItem('token', data.token)
      this.props.isAuth(true)
      this.props.history.push('/home')
      }
      else {
        document.getElementById('inputName').value = ""
        document.getElementById('inputPassword').value = ""
        window.alert('Invalid data')
      }
    })
  }
 
  add = () => {  
    if (
      document.getElementById('inputName').value !== "" &&
      document.getElementById('inputPassword').value !== "" &&
      document.getElementById('inputCreateAccount').value !== ""
    ){
      fetchPost('user/', {
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputCreateAccount').value,
        password: document.getElementById('inputPassword').value
        })
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
            <input className="inputLogin"  id="inputPassword" placeholder=" Password" type="password"></input>
            <input id="inputCreateAccount" placeholder=" Email"></input>
          </div>
          <div id="buttonsLoginContainer">
            <div id="createAccount" onClick={this.createAccount}>Create Account</div>
            <button id="buttonLogin" className="buttonLogin" onClick={this.loginAccount}>Log In</button>
            <button id="buttonSave" className="buttonLogin" onClick={this.add}>Save</button>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Login