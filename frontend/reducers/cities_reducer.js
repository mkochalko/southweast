import { RECEIVE_CITIES } from '../actions/flight_actions';


export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CITIES:
            return action.cities;
        default:
            return state;
    }
}