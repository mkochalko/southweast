import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
    user: {
        firstName: '',
        middleName: '',
        lastName: '',
        birthdate: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        email: '',
        username: '',
        password: '',
        points: ''
    },
    formType: 'Create account',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)