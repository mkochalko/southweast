import { RECEIVE_TRIP, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/trip_actions';

const tripErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TRIP:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default tripErrorsReducer;