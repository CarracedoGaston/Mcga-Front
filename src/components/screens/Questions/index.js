import { connect } from 'react-redux'
import Questions from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.list,
    isLoading: state.questions.isLoading
  }
}

export default connect(mapStateToProps)(Questions)