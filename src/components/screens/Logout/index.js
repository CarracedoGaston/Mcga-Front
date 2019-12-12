import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logout from './view'
import { isAuth } from './../../../redux/actions/users'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.list,
    isLoading: state.users.isLoading,
    isAuth: state.users.isAuth
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { isAuth }, 
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)