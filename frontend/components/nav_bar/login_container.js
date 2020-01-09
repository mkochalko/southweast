import { connect } from 'react-redux';
import LoginDropDown from './login_dropdown';

const mapStateToProps = state => ({
    credentials: {
        username: "",
        password: ""
    },
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDropDown)