import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionPosition: 0,
    }
  }
  choose = () => {
    this.setState({questionPosition: this.state.questionPosition + 1})
  }

  render() { 
    return (
      <MainLayout>
        <div className="Container">
          {!(this.state.questionPosition===this.props.questions.length)?
          <div id="questionPlay">
            <div id="questionToAnswer">
              <h1>{this.props.questions[this.state.questionPosition].title}</h1>
            </div>  
            <button className="buttonAnswer" onClick={this.choose}>{this.props.questions[this.state.questionPosition].firstAnswer}</button>
            <button className="buttonAnswer" onClick={this.choose}>{this.props.questions[this.state.questionPosition].secondAnswer}</button>
            <button className="buttonAnswer" onClick={this.choose}>{this.props.questions[this.state.questionPosition].thirdAnswer}</button>
          </div>
          :
          <div>No more questions. Try Later</div>}
          <div id="staticsImgExample"></div>
        </div>
      </MainLayout>
    )
  }
}

export default Home
