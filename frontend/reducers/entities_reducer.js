import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tripsReducer from './trips_reducer';
import flightsReducer from './flight_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    trips: tripsReducer,
    flights: flightsReducer
})

export default entitiesReducer;