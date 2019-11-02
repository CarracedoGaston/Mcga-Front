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
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div id="Menu">
        <div id="ImgTop"></div>
          <ul id="MenuContainer">
            <li className="link"><Link to="/home" >Home</Link></li>
            <li className="link"><Link to="/login">Login</Link></li>
            <li className="link"><Link to="/gametypes">Game Types</Link></li>
            <li className="link"><Link to="/questions">Questions</Link></li>
            <li className="link"><Link to="/statics">Statics</Link></li>
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