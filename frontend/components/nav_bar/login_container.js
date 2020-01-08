import { connect } from 'react-redux';
import LoginDropDown from './login_dropdown';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDropDown)