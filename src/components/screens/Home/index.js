import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container Home">
          <h1>Home</h1>
        </div>
      </MainLayout>
    )
  }
}

export default Home
