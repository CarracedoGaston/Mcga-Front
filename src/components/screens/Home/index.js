import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="questionPlay">
            <div id="questioToAnswer">
              <h1>Wich sport do you prefer?</h1>
            </div>  
            <div className="buttonAnswer">Basquet</div>
            <div className="buttonAnswer">Football</div>
            <div className="buttonAnswer">Tennis</div>
          </div>
          <div id="staticsImgExample"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Home
