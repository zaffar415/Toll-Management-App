import { combineReducers } from 'redux'
import toll from './toll';
import vehicles from './vehicles';

export default combineReducers({
    toll,
    vehicles
});