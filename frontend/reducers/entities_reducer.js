import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tripsReducer from './trips_reducer';
import flightsReducer from './flight_reducer';
import citiesReducer from './cities_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    trips: tripsReducer,
    flights: flightsReducer,
    cities: citiesReducer
})

export default entitiesReducer;