import { RECEIVE_PASENGERS } from '../actions/flight_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PASENGERS:
            newState = action.passenger
            return newState;
        default:
            return 1;
    }
}