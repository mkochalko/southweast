import { connect } from 'react-redux';
import UsersPage from './users_page';
import { requestTrips } from '../../actions/trip_actions';


const mapStateToProps = state => ({
    user: state.entities.users[state.session.currentUser],
    trips: Object.values(state.entities.trips)
    })

const mapDispatchToProps = dispatch => ({
    requestTrips: () => dispatch(requestTrips())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage)