import * as FlightApiUtil from '../util/flight_api_util';

export const RECEIVE_FLIGHTS = "RECEIVE_FLIGHTS";
export const RECEIVE_FLIGHT = "RECEIVE_FLIGHT";

const receiveFlights = flights => ({
    type: RECEIVE_FLIGHTS,
    flights
})

const receiveFlight = flight => ({
    type: RECEIVE_FLIGHT,
    flight
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

// export const clearErrors = () => ({
//     type: CLEAR_ERRORS
// })

export const requestFlights = (flightInfo) => dispatch => (
    FlightApiUtil.getFlights(flightInfo).then(flights => dispatch(receiveFlights(flights)),
    err => (
        dispatch(receiveErrors(err.resonseJson))
    ))
)

export const requestFlight = (flightId) => dispatch => (
    FlightApiUtil.getFlight(flightId).then(flight => dispatch(receiveFlight(flight)),
    err => (
        dispatch(receiveErrors(err.resonseJson))
    ))
)