import './style.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.MenuShowHide = this.MenuShowHide.bind(this)
    this.MenuOut = this.MenuOut.bind(this)
  }
  MenuShowHide() {
    document.getElementById('Menu').style.display === 'flex'?
      document.getElementById('Menu').style.display = 'none':
      document.getElementById('Menu').style.display = 'flex'  
    document.getElementById('Dark').style.display === 'flex'?
      document.getElementById('Dark').style.display = 'none':
      document.getElementById('Dark').style.display = 'flex'
  }
  MenuOut() {
    document.getElementById('Menu').style.display === 'flex'?
      document.getElementById('Menu').style.display = 'none':
      document.getElementById('Menu').style.display = 'flex'  
    document.getElementById('Dark').style.display === 'flex'?
      document.getElementById('Dark').style.display = 'none':
      document.getElementById('Dark').style.display = 'flex'
  }
  render() {
    return (
      <div id="MainLayout" >
        <div id="MenuButton" onClick={this.MenuShowHide}>
        </div>
        <div id="Menu">
        <div id="ImgTop"></div>
          <ul id="MenuContainer">
            <Link to="/home"><li className="link">Home</li></Link>
            <Link to="/login"><li className="link">Login</li></Link>
            <Link to="/gametypes"><li className="link">Game Types</li></Link>
            <Link to="/questions"><li className="link">Questions</li></Link>
            <Link to="/statics"><li className="link">Statics</li></Link>
          </ul>
        </div>      
        <div id="MainContainer">
        { this.props.children }
        </div>
        <div id="Dark" onClick={this.MenuOut}></div>
      </div>
    )
  }
}

export default MainLayout