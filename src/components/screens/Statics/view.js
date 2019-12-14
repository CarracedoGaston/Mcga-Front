import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { fetchApi } from '../../../helpers/fetch'
import { fetchDelete, fetchPut } from '../../../helpers/fetch'

class Statics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
      select: false
    }
  }

  componentDidMount(){
    fetchApi(`question/user/${localStorage.user}`)    
      .then(data => this.props.loadQuestions(data))
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
      window.alert('Question Updated')    
      this.setState({select: false})
    }
    else {
      window.alert('Complete all the data')
      return
    } 
  } 

  back = () => {
    this.props.loadQuestionById(null)
    this.setState({select: false})
  }

  delete = () => {
    const headers = {'authorization': `Bearer ${localStorage.token}`}
    fetchDelete(`question/${this.props.selectedQuestion._id}`, null, headers)
    .catch((err => console.log(err)))
    this.props.deleteQuestion(this.props.selectedQuestion._id)
    this.setState({select: false})
  }

  showElement = (event) => {    
    const result =this.props.questions.find(question => question._id === event.target.value)
    this.props.loadQuestionById(result) 
    this.setState({select: true}) 
  }
  
  renderList = () => {
    return this.props.questions.map( question => {
      return (
        <li key={ question._id } className="staticQuestionValues">
          <button value = {question._id}  onClick={this.showElement}>{question.title}</button>
        </li>
      )
    })
  }

  render() {
    if (this.state.select)
    {
      return (
        <MainLayout>
          <div className="Container">
            <div id="newQuestion">
              <textarea id="questionToMakeStatic" defaultValue={this.props.selectedQuestion.title} readOnly={false}/>  
              <div className="ValuesStyle">
                <input className="inputAnswerStatic" id="questionFirstAnswer" defaultValue={this.props.selectedQuestion.firstAnswer}/> 
                <span className="spanValue">{this.props.selectedQuestion.firstQuantity}</span>
              </div>
             <div className="ValuesStyle">
               <input className="inputAnswerStatic" id="questionSecondAnswer" defaultValue={this.props.selectedQuestion.secondAnswer}/> 
               <span className="spanValue">{this.props.selectedQuestion.secondQuantity}</span>
             </div>
              <div className="ValuesStyle">
               <input className="inputAnswerStatic" id="questionThirdAnswer" defaultValue={this.props.selectedQuestion.thirdAnswer}/> 
               <span className="spanValue">{this.props.selectedQuestion.thirdQuantity}</span>
             </div>
            </div>
            <div className="buttonAbmQuestion">
              <div className="buttonsTop">
                <button id="buttonQuestionSave" onClick={this.update}>Save</button>
              </div>
              <div className="buttonsBottom">
                <button className="buttonQuestionAbm" onClick={this.delete}>Delete</button>
                <button className="buttonQuestionAbm" onClick={this.back}>Back</button>
              </div> 
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
        </div>
      </MainLayout>
      )
    }
  }
}

export default Statics