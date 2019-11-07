import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Statics extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="selectStatic">      
            <div className="selectQuestion">question 1</div>
            <div className="selectQuestion">question 2</div>
            <div className="selectQuestion">question 3</div>
            <div className="selectQuestion">question 4</div>
            <div className="selectQuestion">question 5</div>
            <div className="selectQuestion">question 6</div>
            <div className="selectQuestion">question 7</div>
          </div>
          <div id="staticsImgExample"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Statics