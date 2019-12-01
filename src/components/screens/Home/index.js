import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPosition } from './../../../redux/actions/home'
import { loadQuestions } from './../../../redux/actions/questions'
import Home from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.list,
    position: state.home.position,
    isLoading: state.questions.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addPosition, loadQuestions },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)