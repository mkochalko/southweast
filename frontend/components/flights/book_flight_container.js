import { connect } from 'react-redux';
import BookFlight from './book_flight';
import { createFlightSession } from '../../actions/flight_actions';

const mapStateToProps = state => ({
    trip: {
        o1: "",
        d1: "",
        dd1: "",
        returnDate: "",
        ta: ""
    },
    flightsApi: state.entities.flightsApi
})

const mapDispatchToProps = dispatch => ({
    createFlightSession: flightInfo => dispatch(createFlightSession(flightInfo))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookFlight)