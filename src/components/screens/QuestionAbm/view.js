import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
//import { fetchApi } from '../../../helpers/fetch'

class QuestionAbm extends Component {
   /* constructor(props) {
        super(props)
        this.state = {
          id: this.props.selectedQuestion._id,
          title: this.props.selectedQuestion.title,
          firstAnswer: this.props.selectedQuestion.firstAnswer,
          firstQuantity: this.props.selectedQuestion.firstQuantity,
          secondAnswer: this.props.selectedQuestion.secondAnswer,
          secondQuantity: this.props.selectedQuestion.secondQuantity,
          thirdAnswer: this.props.selectedQuestion.thirdAnswer,
          thirdQuantity: this.props.selectedQuestion.thirdQuantity
        }
      }*/

  Save = () => {
  }

  Delete =()=>{}
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
    return (
      <MainLayout>
        <div className="Container">
          <div id="newQuestion">
            <input id="questionToMake" value={this.props.selectedQuestion.title} />  
            <input className="inputAnswer" id="questionFirstAnswer" value={this.props.selectedQuestion.firstAnswer}/>
            <input className="inputAnswer" id="questionFirstAnswer" value={this.props.selectedQuestion.secondAnswer}/>
            <input className="inputAnswer" id="questionFirstAnswer" value={this.props.selectedQuestion.thirdAnswer}/> 
          </div>
          <div className="buttonAbmQuestion">
            <button className="buttonQuestionAbm" onClick={this.save}>Save</button>
            <button className="buttonQuestionAbm" onClick={this.save}>Delete</button>
            <button className="buttonQuestionAbm" onClick={this.back}>Back</button>
          </div>        
        </div> 
      </MainLayout>
    )
  }
}

export default QuestionAbm