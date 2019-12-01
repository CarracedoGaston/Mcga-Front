import { connect } from 'react-redux'
import Logout from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.list,
    isLoading: state.users.isLoading
  }
}

export default connect(mapStateToProps)(Logout)