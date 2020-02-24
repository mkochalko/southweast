import * as FlightApiUtil from '../util/flight_api_util';

export const RECEIVE_FLIGHTS = "RECEIVE_FLIGHTS";
export const RECEIVE_FLIGHT = "RECEIVE_FLIGHT";
export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_API_FLIGHTS = "RECEIVE_API_FLIGHTS";
export const RECEIVE_PASENGERS = 'RECEIVE_PASENGERS';
export const RECEIVE_FLIGHT_API_ERRORS = 'RECEIVE_FLIGHT_API_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';
export const CLEAR_FLIGHTS_INFO = 'CLEAR_FLIGHTS_INFO';

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
    type: RECEIVE_FLIGHT_API_ERRORS,
    errors
})

const passengerCount = passenger => ({
    type: RECEIVE_PASENGERS,
    passenger
})

const clearSearchErrors = () => ({
    type: CLEAR_BOOKING_ERRORS
})

const clearFlightsInfo = () => ({
    type: CLEAR_FLIGHTS_INFO
})

export const postFlight = (flight) => dispatch => (
    FlightApiUtil.postFlight(flight)
        .then(flight => dispatch(receiveFlight(flight)))
)

export const requestFlights = () => dispatch => (
    FlightApiUtil.getFlights()
        .then(flights => dispatch(receiveFlights(flights))
    )
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
    FlightApiUtil.createFlightSession(flightInfo)
        .then(flightSession => FlightApiUtil.fetchFlightsApi(flightSession.search_params.sid),
            err => (
                dispatch(receiveErrors(err))
            ))
        .then(flights => dispatch(receiveApiFlights(flights)),
            err => (
                dispatch(receiveErrors(err))
            ))
        .then(flights => flights.flights)
)

export const createReturnFlightSession = (flightInfo) => dispatch => (
    FlightApiUtil.createReturnFlightSession(flightInfo)
        .then(flightSession => FlightApiUtil.fetchFlightsApi(flightSession.search_params.sid),
            err => (
                dispatch(receiveErrors(err))
            ))
        .then(flights => dispatch(receiveApiFlights(flights)),
            err => (
                dispatch(receiveErrors(err))
            ))
        .then(flights => flights.flights)
)

export const updatePassengers = passenger => dispatch => (
    dispatch(passengerCount(passenger))
)

export const clearBookingErrors = () => dispatch => (
    dispatch(clearSearchErrors())
)

export const clearFlights = () => dispatch => {
    // debugger
    return dispatch(clearFlightsInfo())
}