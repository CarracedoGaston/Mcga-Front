import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Questions extends Component {
  render() {
    return (
      <MainLayout>
        <div className="Container">
          <div id="newQuestion">
            <div id="questioToAnswer">
              <h1>New question?</h1>
            </div>  
            <div className="inputAnswer">Answer 1</div>
            <div className="inputAnswer">Answer 2</div>
            <div className="inputAnswer">Answer 3</div>
          </div>
          <div id="buttonNewQuestion">
            <div className="buttonQuestion">Game Type</div>
            <div className="buttonQuestion">Save Question</div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Questions
