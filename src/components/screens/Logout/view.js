import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Logout extends Component {

  logout = () => {
    const myStorage = window.localStorage
    myStorage.clear()  
    window.location = "/login"
  }

  render() {     
    return (  
      <MainLayout>
        <div className="Container">
         <div id="buttonsLoginContainer">
            <button id="buttonLogin" className="buttonLogin" onClick={this.logout}>Log Out</button>
         </div>
        </div>
      </MainLayout>
    )
  }
}

export default Logout