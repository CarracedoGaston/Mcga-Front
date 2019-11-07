import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class GameTypes extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="gameQuestion">      
            <div className="gameQuestion">Sports</div>
            <div className="gameQuestion">History</div>
            <div className="gameQuestion">Movies</div>
            <div className="gameQuestion">Languages</div>
            <div className="gameQuestion">Fashion</div>
            <div className="gameQuestion">Foods</div>
          </div>
          <div id="buttonPanel">
            <button className="buttonBack">Back</button>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default GameTypes
