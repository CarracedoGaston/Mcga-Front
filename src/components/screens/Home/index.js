import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Home from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.list,
    isLoading: state.questions.isLoading
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     dispatch
//   )
// }

export default connect(mapStateToProps/*, mapDispatchToProps*/)(Home)