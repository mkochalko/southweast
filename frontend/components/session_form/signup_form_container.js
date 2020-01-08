import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
    user: {
        firstName: '',
        middleName: '',
        lastName: '',
        birthdate: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        email: '',
        username: '',
        password: '',
    },
    formType: 'Create accout'
});

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(signup(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)