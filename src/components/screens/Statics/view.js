import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import fetchApi from '../../../helpers/fetch'

class Statics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null
    }
    this.showElement = this.showElement.bind(this)
  }

  componentDidMount(){
    fetchApi('/question')
        .then(data => this.props.loadQuestions(data))
  }

  showElement = (event) => {
    this.setState({question: this.props.questions.find(question => question._id === event.target.value)})
  }

  renderList = () => {
    return this.props.questions.map( question => {
      return (
        <li key={ question._id } className="staticQuestion">
          <button value = {question._id} onClick={this.showElement}>{question.title}</button>
        </li>
      )
    })
  }

  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="selectStatic">  
            <ul id="staticQuestionContainer">
              { this.renderList() }
            </ul>
          </div>    
          {this.state.question !== null 
          ?    
          <div id="staticGraph">
            <div className="staticQuestionAnswer"> {this.state.question.title} </div>
            <div className="staticQuestionAnswer"> {this.state.question.firstAnswer}: {this.state.question.firstQuantity} </div>
            <div className="staticQuestionAnswer"> {this.state.question.secondAnswer}: {this.state.question.secondQuantity} </div>
            <div className="staticQuestionAnswer"> {this.state.question.thirdAnswer}: {this.state.question.thirdQuantity} </div>
          </div>
          :
          <div>Nothing to see</div>}
        </div>
      </MainLayout>
    )
  }
}

export default Statics