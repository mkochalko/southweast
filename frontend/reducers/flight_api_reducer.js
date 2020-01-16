import { RECEIVE_API_FLIGHTS } from '../actions/flight_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_API_FLIGHTS:
            newState = action.flights
            return newState;
        default:
            return state;
    }
}