import { connect } from 'react-redux';
import LoginDropDown from './login_dropdown';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
    credentials: {
        username: "",
        password: ""
    },
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDropDown)