import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';

export default combineReducers({
    registration: registrationReducer
});