import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadQuestions } from './../../../redux/actions/questions'
import { loadQuestionById } from './../../../redux/actions/statics'
import Statics from './view'


const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.list,
    selectedQuestion: state.statics.selectedQuestion,
    isLoading: state.questions.isLoading,
    error: state.questions.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { loadQuestions, loadQuestionById }, 
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Statics)