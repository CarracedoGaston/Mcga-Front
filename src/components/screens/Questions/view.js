import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import postApi from '../../../helpers/fetchPost'

class Questions extends Component {
  add = () => {
    postApi({
      title: 'test',
      user: '5dc215cc5461de431893ea66',
      firstAnswer: 'first',
      secondAnswer: 'second',
      thirdAnswer: 'third',
      firstQuantity: '0',
      secondQuantity: '0',
      thirdQuantity: '0'
      })
    // if (
    //   document.getElementById('questionToMake').value !== "" &&
    //   document.getElementById('questionFirstAnswer').value !== "" &&
    //   document.getElementById('questionSecondtAnswer').value !== "" &&
    //   document.getElementById('questionThirdAnswer').value !== ""
    // ){
    //   this.props.addQuestions()
    //   window.alert('Question Saved')
    //   document.getElementById('questionToMake').value = ""
    //   document.getElementById('questionFirstAnswer').value = ""
    //   document.getElementById('questionSecondtAnswer').value = ""
    //   document.getElementById('questionThirdAnswer').value = ""
    // }
    // else {
    //   window.alert('Complete all the data')
    //   return
    // } 
  }
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="newQuestion">
            <textarea id="questionToMake" placeholder="Insert your new Question!!" />  
            <input className="inputAnswer" id="questionFirstAnswer" placeholder="First Answer..." />
            <input className="inputAnswer" id="questionSecondtAnswer" placeholder="Second Answer..." />
            <input className="inputAnswer" id="questionThirdAnswer" placeholder="Third Answer..." />
          </div>
          <div id="buttonNewQuestion">
            <button className="buttonQuestion" onClick={this.add}>Save Question</button>
          </div>
           { console.log(this.props.questions )}
        </div>
      </MainLayout>
    )
  }
}

export default Questions
