import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { fetchApi } from '../../../helpers/fetch'
import { fetchDelete, fetchPut } from '../../../helpers/fetch'

class Statics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null
    }
    this.showElement = this.showElement.bind(this)
  }

  componentDidMount(){
    fetchApi(`question/user/${localStorage.user}`)    
    .then(data => this.props.loadQuestions(data))
    // .catch(err => this.props.setError(err))
  }

  update = () => {
    if (
      document.getElementById('questionToMake').value !== "" &&
      document.getElementById('questionFirstAnswer').value !== "" &&
      document.getElementById('questionSecondAnswer').value !== "" &&
      document.getElementById('questionThirdAnswer').value !== ""
    )
    {       
      const headers = {'authorization': `Bearer ${localStorage.token}`}
      const questionUpd = {
        _id: this.props.selectedQuestion._id,
        title: document.getElementById('questionToMake').value,
        user: localStorage.user, 
        firstAnswer: document.getElementById('questionFirstAnswer').value,
        secondAnswer: document.getElementById('questionSecondAnswer').value,
        thirdAnswer: document.getElementById('questionThirdAnswer').value,
        firstQuantity: '0',
        secondQuantity: '0',
        thirdQuantity: '0' 
      }

      fetchPut(`question/${this.props.selectedQuestion._id}`, {
        questionUptitle: document.getElementById('questionToMake').value,
        user: localStorage.user, 
        firstAnswer: document.getElementById('questionFirstAnswer').value,
        secondAnswer: document.getElementById('questionSecondAnswer').value,
        thirdAnswer: document.getElementById('questionThirdAnswer').value,
        firstQuantity: '0',
        secondQuantity: '0',
        thirdQuantity: '0'
      }, headers) 
      .then(this.props.updateQuestion(questionUpd))
        //   .catch(err => this.props.setError(err))

       
      window.alert('Question Updated')    
    }
  } 

  back = () => {
    this.props.loadQuestionById(null)
  }

  delete = () => {
    const headers = {'authorization': `Bearer ${localStorage.token}`}
    fetchDelete(`question/${this.props.selectedQuestion._id}`, null, headers)
    .then(data => console.log("resultado", data))
    .catch((err => console.log(err)))
    this.props.deleteQuestion(this.props.selectedQuestion._id)
  }

  showElement = (event) => {    
    const result =this.props.questions.find(question => question._id === event.target.value)
    this.props.loadQuestionById(result)
  }
  
  renderList = () => {
    return this.props.questions.map( question => {
      return (
        <li key={ question._id } className="staticQuestion">
          <button value = {question._id}  onClick={this.showElement}>{question.title}</button>
        </li>
      )
    })
  }

  render() {
    if (this.props.selectedQuestion!== null&&this.props.selectedQuestion!== {})
    {
      return (
        <MainLayout>
          <div className="Container">
            <div id="newQuestion">
              <input id="questionToMake" placeholder={this.props.selectedQuestion.title}/>  
              <input className="inputAnswer" id="questionFirstAnswer" placeholder={this.props.selectedQuestion.firstAnswer}/>
              <input className="inputAnswer" id="questionSecondAnswer" placeholder={this.props.selectedQuestion.secondAnswer}/>
              <input className="inputAnswer" id="questionThirdAnswer" placeholder={this.props.selectedQuestion.thirdAnswer}/> 
            </div>
            <div className="buttonAbmQuestion">
              <button className="buttonQuestionAbm" onClick={this.update}>Save</button>
              <button className="buttonQuestionAbm" onClick={this.delete}>Delete</button>
              <button className="buttonQuestionAbm" onClick={this.back}>Back</button>
            </div>        
          </div> 
        </MainLayout>
      )
    }
    else {
      return (
        <MainLayout>
          <div className="Container">
            <div id="selectStatic">  
              <ul id="staticQuestionContainer">
                { this.renderList() }
              </ul>
            </div>    
          <div>Please.Select one question</div>
        </div>
      </MainLayout>
      )
    }
  }
}

export default Statics