import { connect } from 'react-redux'
import PrivateRoutes from './view'

const mapStateToProps = state => ({
  isAuth: state.users.isAuth,
})

export default connect(mapStateToProps)(PrivateRoutes)