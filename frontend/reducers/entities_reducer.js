import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tripsReducer from './trips_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    trips: tripsReducer
})

export default entitiesReducer;