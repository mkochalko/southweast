import { connect } from 'react-redux';
import Confirmation from './confirmation';
import { createTrip, clearTrips } from  '../../actions/trip_actions';
import { buyFlight } from  '../../actions/session_actions';

const mapStateToProps = state => ({
    flights: Object.values(state.entities.flights),
    user: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    postTrip: (tripInfo) => dispatch(createTrip(tripInfo)),
    buyFlight: (user) => dispatch(buyFlight(user)),
    clearTrips: () => dispatch(clearTrips())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Confirmation)



//for Production:
    // Object.values(state.entities.flights)
let flights = [{id: 34,
departureCityId: "SFO",
arrivalCityId: "LAX",
departureDate: "2020-02-21",
duration: 85,
passengers: 1,
departureTime: "2000-01-01T08:00:00.000Z",
price: 69},
{id: 35,
departureCityId: "LAX",
arrivalCityId: "SFO",
departureDate: "2020-02-29",
duration: 90,
passengers: 1,
departureTime: "2000-01-01T10:00:00.000Z",
price: 125}]