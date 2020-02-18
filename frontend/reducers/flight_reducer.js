import { RECEIVE_FLIGHTS, RECEIVE_FLIGHT } from '../actions/flight_actions';

export default (state ={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_FLIGHTS:
            newState = action.flights
            return newState;
        case RECEIVE_FLIGHT:
            newState[action.flight.id] = action.flight
            return newState;
        default:
            return state;
    }
}