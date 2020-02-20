import { RECEIVE_FLIGHT_API_ERRORS, CLEAR_BOOKING_ERRORS } from '../actions/flight_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_FLIGHT_API_ERRORS:
            // debugger;
            newState = 'Search was not successful, please try different search parameters or try again';
            return newState;
        case CLEAR_BOOKING_ERRORS:
            newState = '';
            return newState;
        default:
            return state;
    }
}