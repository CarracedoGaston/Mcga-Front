import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import fetchApi from '../../../helpers/fetch'

class Statics extends Component {

  componentDidMount(){
    fetchApi('/question')
        .then(data => this.props.loadQuestions(data))
  }

  showChart = () => {
  }

  renderList = () => {
    return this.props.questions.map
    (question => {
      return (
        <li key={ question.id}>
          <button onClick={this.showChart()}>{question.title}</button>
        </li>
      )
    })
  }

  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="selectStatic">  
            <ul>
              { this.renderList() }
            </ul>
          </div>
          <div id="staticsImgExamp"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Statics