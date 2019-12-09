import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { fetchDelete, fetchPatch } from '../../../helpers/fetch'

class QuestionAbm extends Component {
  constructor(props) {
    super(props)         
      this.delete = this.delete.bind(this)
      this.save = this.save.bind(this)
      this.back = this.back.bind(this)
   }

  save = () => {
    if (
      document.getElementById('questionToMake').value !== "" &&
      document.getElementById('questionFirstAnswer').value !== "" &&
      document.getElementById('questionSecondtAnswer').value !== "" &&
      document.getElementById('questionThirdAnswer').value !== ""
    )
    {       
      const headers = {'authorization': `Bearer ${localStorage.token}`}

      fetchPatch(`question/${this.props.selectedQuestion._id}`, {
        title: document.getElementById('questionToMake').value,
        user: localStorage.user, 
        firstAnswer: document.getElementById('questionFirstAnswer').value,
        secondAnswer: document.getElementById('questionSecondtAnswer').value,
        thirdAnswer: document.getElementById('questionThirdAnswer').value,
        firstQuantity: '0',
        secondQuantity: '0',
        thirdQuantity: '0'
      }, headers).then(data => console.log(data))
        //   .catch(err => this.props.setError(err))
      window.alert('Question Saved')
    }
  } 

  delete = () => {
    const headers = {'authorization': `Bearer ${localStorage.token}`}
    fetchDelete(`question/${this.props.selectedQuestion._id}`, null, headers)
    .then(data => console.log("resultado", data))
   // .catch((err => this.props.setError(err)))
    .catch((err => console.log(err)))
    window.location = "/Statics"

  }

  back =()=>{
    window.location = "/Statics"
  }

  componentDidMount() {
     // this.props.setLoading()
    const questionId = this.props.match.params.questionId
    const result =this.props.questions.find(question => question._id === questionId)
    this.props.loadQuestionById(result)

        //this.props.loadQuestionById(this.props.selectedQuestion)
            // .catch(err => this.props.setError(err))
  }



  render() {
    console.log("ptoppsss", this.props)
    return (
      <MainLayout>
        <div className="Container">
          <div id="newQuestion">
            <input id="questionToMake" placeholder={this.props.selectedQuestion.title}/>  
            <input className="inputAnswer" id="questionFirstAnswer" placeholder={this.props.selectedQuestion.firstAnswer}/>
            <input className="inputAnswer" id="questionSecondAnswer" placeholder={this.props.selectedQuestion.secondAnswer}/>
            <input className="inputAnswer" id="questionThirdtAnswer" placeholder={this.props.selectedQuestion.thirdAnswer}/> 
          </div>
          <div className="buttonAbmQuestion">
            <button className="buttonQuestionAbm" onClick={this.save}>Save</button>
            <button className="buttonQuestionAbm" onClick={this.delete}>Delete</button>
            <button className="buttonQuestionAbm" onClick={this.back}>Back</button>
          </div>        
        </div> 
      </MainLayout>
    )
  }
}

export default QuestionAbm