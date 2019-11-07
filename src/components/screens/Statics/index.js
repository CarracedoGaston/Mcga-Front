import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Statics extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <h1>Statics</h1>
        </div>
      </MainLayout>
    )
  }
}

export default Statics