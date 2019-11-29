import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadQuestions } from './../../../redux/actions/questions'
import { loadStatics } from './../../../redux/actions/statics'
import Statics from './view'


const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.list,
    position: state.statics.position,
    isLoading: state.questions.isLoading,
    error: state.questions.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { loadQuestions, loadStatics }, 
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Statics)