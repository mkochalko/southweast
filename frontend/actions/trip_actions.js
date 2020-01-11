import * as TripUtil from '../util/trip_api_util'

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_TRIP = 'RECEIVE_TRIP';
export const REMOVE_TRIP = 'REMOVE_TRIP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveTrips = trips => ({
    type: RECEIVE_TRIPS,
    trips
})

const receiveTrip = trip => ({
    type: RECEIVE_TRIP,
    trip
})

const removeTrip = tripId => ({
    type: REMOVE_TRIP,
    tripId
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const requestTrips = () => dispatch => (
    TripUtil.getTrips().then(trips => dispatch(receiveTrips(trips)),
    err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const requestTrip = tripId => dispatch => (
    TripUtil.getTrip(tripId).then(trip => dispatch(receiveTrip(trip)),
    err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createTrip = trip => dispatch => (
    TripUtil.createTrip(trip).then(trip => dispatch(receiveTrip(trip)),
    err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const updateTrip = trip => dispatch => (
    TripUtil.updateTrip(trip).then(trip => dispatch(receiveTrip(trip)),
    err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const cancelTrip = tripId => dispatch => (
    TripUtil.cancelTrip(tripId).then(() => dispatch(removeTrip(tripId)),
    err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);



