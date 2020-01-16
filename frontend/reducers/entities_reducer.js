import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tripsReducer from './trips_reducer';
import flightsReducer from './flight_reducer';
import citiesReducer from './cities_reducer';
import flightsApiReducer from './flight_api_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    trips: tripsReducer,
    flights: flightsReducer,
    flightsApi: flightsApiReducer,
    cities: citiesReducer
})

export default entitiesReducer;