import './style.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainLayout extends Component {
  render() {
    return (
      <div id="MainLayout">
        <div id="Menu">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/gametypes">Game Types</Link></li>
            <li><Link to="/questions">Questions</Link></li>
            <li><Link to="/statics">Statics</Link></li>
          </ul>
        </div>      
        <div id="MainContainer">
        { this.props.children }
        </div>
      </div>
    )
  }
}

export default MainLayout