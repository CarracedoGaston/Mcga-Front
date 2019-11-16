import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Questions extends Component {
  // constructor(props) {
  //   super(props)
  // }
  renderList = list => {
    return list.map(question => {
        return <li key={question.id}>Name: {question.firstAnswer} </li>
    })
  }
  add = () => {
    this.props.addQuestions()
  }
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="newQuestion">
            <div id="questionToMake">
              <h1>Insert your new Question!!</h1>
            </div>  
            <div className="inputAnswer">Answer...</div>
            <div className="inputAnswer">Answer...</div>
            <div className="inputAnswer">Answer...</div>
          </div>
          <div id="buttonNewQuestion">
            <button className="buttonQuestion">Game Type</button>
            <button className="buttonQuestion">Save Question</button>
          </div>
          <ul>
            { this.renderList(this.props.questions) }
          </ul>
            <button onClick={this.add}>Add</button>
        </div>
      </MainLayout>
    )
  }
}

export default Questions
