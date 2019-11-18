import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionPosition: 0
    }
  }
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="questionPlay">
            <div id="questionToAnswer">
              <h1>{this.props.questions[this.state.questionPosition].title}</h1>
              { console.log(this.props.questions[this.state.questionPosition])}
            </div>  
            <button className="buttonAnswer">{this.props.questions[this.state.questionPosition].firstAnswer}</button>
            <button className="buttonAnswer">{this.props.questions[this.state.questionPosition].secondAnswer}</button>
            <button className="buttonAnswer">{this.props.questions[this.state.questionPosition].thirdAnswer}</button>
          </div>
          <div id="staticsImgExample"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Home
