import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadQuestionById } from './../../../redux/actions/statics'
import QuestionAbm from './view'


const mapStateToProps = (state, ownProps) => {
  console.log("maps state to prop questionabm", state)
  return {
    questions: state.questions.list, 
    selectedQuestion: state.statics.selectedQuestion,
    isLoading: state.questions.isLoading,
    error: state.questions.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { loadQuestionById }, 
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAbm)