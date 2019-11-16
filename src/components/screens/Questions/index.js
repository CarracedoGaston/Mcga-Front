import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addQuestions } from './../../../redux/actions/questions'
import Questions from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.list,
    isLoading: state.questions.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addQuestions },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)