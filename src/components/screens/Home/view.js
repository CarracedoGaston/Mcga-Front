import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { fetchApi, fetchPatch } from '../../../helpers/fetch'

class Home extends Component {

  chooseA = () => {
    this.props.addPosition()
    let value = this.props.questions[this.props.position].firstQuantity + 1
    const headers = {'authorization': `Bearer ${localStorage.token}`}
    fetchPatch(`question/${this.props.questions[this.props.position]._id}`, {
        firstQuantity: value
      }, headers) 
  }

  chooseB = () => {
    this.props.addPosition()
    let value = this.props.questions[this.props.position].secondQuantity + 1
    const headers = {'authorization': `Bearer ${localStorage.token}`}
    fetchPatch(`question/${this.props.questions[this.props.position]._id}`, {
        secondQuantity: value
      }, headers) 
  }

  chooseC = () => {
    this.props.addPosition()
    let value = this.props.questions[this.props.position].thirdQuantity + 1
    const headers = {'authorization': `Bearer ${localStorage.token}`}
    fetchPatch(`question/${this.props.questions[this.props.position]._id}`, {
        thirdQuantity: value
      }, headers) 
  }

  update = () => {
    const questionUpd = {
      _id: this.props.questions[this.props.position]._id,
      title: this.props.questions[this.props.position].title,
      user: localStorage.user, 
      firstAnswer: this.props.questions[this.props.position].firstAnswer,
      secondAnswer: this.props.questions[this.props.position].secondAnswer,
      thirdAnswer: this.props.questions[this.props.position].thirdAnswer,
      firstQuantity: this.props.questions[this.props.position].firstQuantity,
      secondQuantity: this.props.questions[this.props.position].secondQuantity,
      thirdQuantity: this.props.questions[this.props.position].thirdQuantity 
    }
    console.log(questionUpd)
      const headers = {'authorization': `Bearer ${localStorage.token}`}
      fetchPatch(`question/${this.props.questions[this.props.position]._id}`, {
        firstQuantity: 3
      }, headers) 
  } 


  componentDidMount() {
    fetchApi('question/')
        .then(data => this.props.loadQuestions(data))
  }

  render() { 
    console.log(this.props.questions)
    return (
      <MainLayout>
        <div className="Container">
          {!(this.props.position>=this.props.questions.length)?
          <div id="questionPlay">
            <div id="questionToAnswer">
              <h1>{this.props.questions[this.props.position].title}</h1>
            </div>  
            <button className="buttonAnswer" onClick={this.chooseA}>{this.props.questions[this.props.position].firstAnswer}</button>
            <button className="buttonAnswer" onClick={this.chooseB}>{this.props.questions[this.props.position].secondAnswer}</button>
            <button className="buttonAnswer" onClick={this.chooseC}>{this.props.questions[this.props.position].thirdAnswer}</button>
          </div>
          :
          <div>No more questions. Try Later</div>}
          <div id="staticsImgExample"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Home
