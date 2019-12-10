import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { fetchApi } from '../../../helpers/fetch'

class Home extends Component {

  choose = () => {
    this.props.addPosition()
  }

  componentDidMount() {
    // this.props.setLoading()
    fetchApi('question/')
        .then(data => this.props.loadQuestions(data))
        // .catch(err => this.props.setError(err))
  }

  render() { 
    return (
      <MainLayout>
        <div className="Container">
          {!(this.props.position===this.props.questions.length)?
          <div id="questionPlay">
            <div id="questionToAnswer">
              <h1>{this.props.questions[this.props.position].title}</h1>
            </div>  
            <button className="buttonAnswer" onClick={this.choose}>{this.props.questions[this.props.position].firstAnswer}</button>
            <button className="buttonAnswer" onClick={this.choose}>{this.props.questions[this.props.position].secondAnswer}</button>
            <button className="buttonAnswer" onClick={this.choose}>{this.props.questions[this.props.position].thirdAnswer}</button>
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
