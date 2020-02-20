import { connect } from 'react-redux';
import BookFlight from './book_flight';
import { createFlightSession, createReturnFlightSession, updatePassengers } from '../../actions/flight_actions';

const mapStateToProps = state => ({
    trip: {
        o1: "",
        d1: "",
        dd1: "",
        dd2: "",
        ta: 1
    },
    flightsApi: state.entities.flightsApi,
    errors: Object.values(state.errors.flightAPI)
})

const mapDispatchToProps = dispatch => ({
    createFlightSession: flightInfo => dispatch(createFlightSession(flightInfo)),
    createReturnFlightSession: flightInfo => dispatch(createReturnFlightSession(flightInfo)),
    updatePassengers: passengers => dispatch(updatePassengers(passengers))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookFlight)