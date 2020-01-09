import { connect } from 'react-redux';
import UsersPage from './users_page';

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage)