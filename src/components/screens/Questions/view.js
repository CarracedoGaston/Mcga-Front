import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Questions extends Component {
  // constructor(props) {
  //   super(props)
  // }
  // renderList = list => {
  //   return list.map(question => {
  //       return <li key={question.id}>Name: {question.firstAnswer} </li>
  //   })
  // }
  add = () => {
    this.props.addQuestions()
    window.alert('Question Saved')
    document.getElementById('questionToMake').value = null
    document.getElementById('questionFirstAnswer').value = null
    document.getElementById('questionSecondtAnswer').value = null
    document.getElementById('questionThirdAnswer').value = null
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
            <button className="buttonQuestion">Game Type</button>
            <button className="buttonQuestion" onClick={this.add}>Save Question</button>
          </div>
          {/* <ul>
            { this.renderList(this.props.questions) }
            { console.log(this.props.questions )}
          </ul> */}
           { console.log(this.props.questions )}
        </div>
      </MainLayout>
    )
  }
}

export default Questions
