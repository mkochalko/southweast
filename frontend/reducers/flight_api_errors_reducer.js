import { RECEIVE_FLIGHT_API_ERRORS, CLEAR_BOOKING_ERRORS } from '../actions/flight_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    // debugger
    switch (action.type) {
        case RECEIVE_FLIGHT_API_ERRORS:
            // debugger;
            if (action.errors.statusText === 'Too Many Requests') {
                newState = 'Too Many Requests'
            } else if (action.errors.errors.statusText === 'Too Many Requests') {
                newState = 'Too Many Requests'
            } else {
                newState = 'Search was not successful, please try different search parameters or try again';
            }
            return newState;
        case CLEAR_BOOKING_ERRORS:
            newState = '';
            return newState;
        default:
            return state;
    }
}