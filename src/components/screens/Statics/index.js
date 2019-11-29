import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadQuestions } from './../../../redux/actions/questions'
import Statics from './view'


const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.list,
    isLoading: state.questions.isLoading,
    error: state.questions.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { loadQuestions }, 
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Statics)