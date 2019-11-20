import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUsers } from './../../../redux/actions/users'
import Login from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.list,
    isLoading: state.users.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addUsers },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)