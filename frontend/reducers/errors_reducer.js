import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import tripErrorsReducer from './trip_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    trips: tripErrorsReducer
})

export default errorsReducer;