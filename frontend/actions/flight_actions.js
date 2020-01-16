import * as FlightApiUtil from '../util/flight_api_util';

export const RECEIVE_FLIGHTS = "RECEIVE_FLIGHTS";
export const RECEIVE_FLIGHT = "RECEIVE_FLIGHT";
export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_API_FLIGHTS = "RECEIVE_API_FLIGHTS";

const receiveFlights = flights => ({
    type: RECEIVE_FLIGHTS,
    flights
})

const receiveApiFlights = flights => ({
    type: RECEIVE_API_FLIGHTS,
    flights
})

const receiveFlight = flight => ({
    type: RECEIVE_FLIGHT,
    flight
})

const receiveCities = cities => ({
    type: RECEIVE_CITIES,
    cities
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

// export const clearErrors = () => ({
//     type: CLEAR_ERRORS
// })

export const requestFlights = () => dispatch => (
    FlightApiUtil.getFlights().then(flights => dispatch(receiveFlights(flights)),
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

export const requestCities = () => dispatch => (
    FlightApiUtil.getCities().then(cities => dispatch(receiveCities(cities)),
        err => (
            dispatch(receiveErrors(err.resonseJson))
        ))
)

export const createFlightSession = (flightInfo) => dispatch => (
    FlightApiUtil.createFlightSession(flightInfo).then(flightSession => {
        return FlightApiUtil.fetchFlightsApi(flightSession.search_params.sid)
    })
        .then(flights => dispatch(receiveApiFlights(flights)))
)

// dispatch(receiveApiFlights(flights))
