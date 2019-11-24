import { connect } from 'react-redux'
import Login from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.list,
    isLoading: state.users.isLoading
  }
}

export default connect(mapStateToProps)(Login)