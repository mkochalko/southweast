import { connect } from 'react-redux';
import UsersPage from './users_page';

const mapStateToProps = (state) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage)