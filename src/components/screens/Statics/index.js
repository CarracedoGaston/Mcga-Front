import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { loadQuestionById, deleteQuestion, loadQuestions, updateQuestion } from './../../../redux/actions/statics'
import Statics from './view'


const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.statics.questions,
    selectedQuestion: state.statics.selectedQuestion,
    isLoading: state.questions.isLoading,
    error: state.questions.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { loadQuestions, loadQuestionById, deleteQuestion, updateQuestion }, 
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Statics)
)
