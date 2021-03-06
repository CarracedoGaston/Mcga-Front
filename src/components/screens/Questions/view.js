import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { fetchPost } from '../../../helpers/fetch'

class Questions extends Component {

  add = () => {
    if (
      document.getElementById('questionToMake').value !== "" &&
      document.getElementById('questionFirstAnswer').value !== "" &&
      document.getElementById('questionSecondtAnswer').value !== "" &&
      document.getElementById('questionThirdAnswer').value !== ""
    ){ 
      const headers = {
        'authorization': `Bearer ${localStorage.token}`
    }
      fetchPost('question/', {
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
      document.getElementById('questionToMake').value = ""
      document.getElementById('questionFirstAnswer').value = ""
      document.getElementById('questionSecondtAnswer').value = ""
      document.getElementById('questionThirdAnswer').value = ""
    }
    else {
      window.alert('Complete all the data')
      return
    } 
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
        </div> 
      </MainLayout>
    )
  }
}

export default Questions