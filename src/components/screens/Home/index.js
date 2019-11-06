import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="questionPlay">
            <h1>Home</h1>
          </div>
          <div id="staticsImgExample"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Home
