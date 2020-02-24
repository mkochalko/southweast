import { connect } from 'react-redux';
import UsersPage from './users_page';
import { requestTrips, clearTrips } from '../../actions/trip_actions';
import { requestCities, requestFlights, clearFlights } from '../../actions/flight_actions';



const mapStateToProps = state => ({
    user: state.entities.users[state.session.currentUser],
    trips: Object.values(state.entities.trips),
    flights: Object.values(state.entities.flights)
    })

const mapDispatchToProps = dispatch => ({
    requestTrips: () => dispatch(requestTrips()),
    requestFlights: () => dispatch(requestFlights()),
    requestCities: () => dispatch(requestCities()),
    clearTrips: () => dispatch(clearTrips()),
    clearFlights: () => dispatch(clearFlights())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage)