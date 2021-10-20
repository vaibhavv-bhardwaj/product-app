import { connect } from 'react-redux'
import { loginUser } from '../actions/action'
import Login from '../modules/login'

const mapStateToProps = state => ({
    userData: state.data
})

const mapDispatchToProps = dispatch => ({
    loginUserHandler: data => dispatch(loginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);