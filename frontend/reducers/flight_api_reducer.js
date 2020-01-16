import { RECEIVE_API_FLIGHTS } from '../actions/flight_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    // debugger;
    switch (action.type) {
        case RECEIVE_API_FLIGHTS:
            // debugger
            newState = action.flights
            return newState;
        default:
            return state;
    }
}