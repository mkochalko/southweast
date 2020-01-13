import { connect } from 'react-redux';
import UsersPage from './users_page';
import { requestTrips } from '../../actions/trip_actions';
import { requestCities, requestFlights } from '../../actions/flight_actions';



const mapStateToProps = state => ({
    user: state.entities.users[state.session.currentUser],
    trips: Object.values(state.entities.trips),
    flights: Object.values(state.entities.flights)
    })

const mapDispatchToProps = dispatch => ({
    requestTrips: () => dispatch(requestTrips()),
    requestFlights: () => dispatch(requestFlights()),
    requestCities: () => dispatch(requestCities())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage)