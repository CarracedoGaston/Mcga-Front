import './style.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorHeader: '',
      backgroundApp: ''
    }
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

  componentDidMount(){
    switch(window.location.pathname.split('/')[1]) {
      case 'home':
        this.setState({colorHeader: 'rgb(105, 73, 247)'})
        this.setState({backgroundApp: 'rgb(202, 192, 247)'})
        break
      case 'login':
        this.setState({colorHeader: 'rgb(231, 56, 223)'})
        this.setState({backgroundApp: 'rgb(243, 192, 247)'})
        break
      case 'logout':
        this.setState({colorHeader: 'rgb(231, 56, 223)'})
        this.setState({backgroundApp: 'rgb(243, 192, 247)'})
        break
      case 'questions':
        this.setState({colorHeader: 'rgb(44, 188, 207)'})
        this.setState({backgroundApp: 'rgb(192, 247, 243)'})
        break
      case 'statics':
        this.setState({colorHeader: 'rgb(124, 10, 177)'})
        this.setState({backgroundApp: 'rgb(222, 192, 247)'})
        break
      default:
        this.setState({colorHeader: 'black'})
        this.setState({backgroundApp: 'black'})
        break
    }
  }

  render() {
    return (
      <div id="MainLayout">
        <div id="header" className='color' style={{color: this.state.colorHeader}}>
          {window.location.pathname.split('/')}  
        </div>
        <div id="MenuButton" onClick={this.MenuShowHide}>
        </div>
        <div id="Menu">
          <div id="ImgTop"></div>
          <ul id="MenuContainer">
            <div id="publicSection">
              <Link to="/home"><li className="link">
                <div id="homeImg" className="imgsMenu"></div>Home</li>
              </Link>
              {localStorage.getItem('token')!==null
              ?
              <Link to="/login"><li className="link">
                <div id="loginImg" className="imgsMenu"></div>Login</li>
              </Link>  
              :
              <Link to="/logout"><li className="link">
                <div id="loginImg" className="imgsMenu"></div>Login</li>
              </Link>  
              }    
            </div>
            {localStorage.getItem('token')!==null
            ?
            <div id="privateSection">
              <Link to="/questions"><li className="link">
                <div id="questionImg" className="imgsMenu"></div>Questions</li>
              </Link>
              <Link to="/statics"><li className="link">
                <div id="staticImg" className="imgsMenu"></div>Statics</li>
              </Link>
            </div>
            :
            <div id="privateSection">
              <Link to="/login"><li className="link">
                <div id="questionImg" className="imgsMenu"></div>Questions</li>
              </Link>
              <Link to="/login"><li className="link">
                <div id="staticImg" className="imgsMenu"></div>Statics</li>
              </Link>
            </div>
            }
          </ul>
        </div>      
        <div id="MainContainer" style={{backgroundColor: this.state.backgroundApp}}>
          { this.props.children }
        </div>
        <div id="Dark" onClick={this.MenuOut}></div>
      </div>
    )
  }
}

export default MainLayout