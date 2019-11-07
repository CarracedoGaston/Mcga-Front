import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Statics extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="selectStatic">      
            <div className="staticQuestion">Which sport do you prefer?</div>
            <div className="staticQuestion">What type of person you are?</div>
            <div className="staticQuestion">How old are you?</div>
            <div className="staticQuestion">Which color do you prefer?</div>
            <div className="staticQuestion">What is your sex?</div>
          </div>
          <div id="staticsImgExamp"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Statics