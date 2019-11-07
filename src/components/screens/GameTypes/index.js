import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class GameTypes extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="selectStatic">      
            <div className="selectQuestion">Sports</div>
            <div className="selectQuestion">History</div>
            <div className="selectQuestion">Movies</div>
            <div className="selectQuestion">Languages</div>
            <div className="selectQuestion">Fashion</div>
            <div className="selectQuestion">Foods</div>
          </div>
          <div id="buttonPanel">
            <div className="buttonBack">Back</div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default GameTypes
