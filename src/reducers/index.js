import { combineReducers } from 'redux';
import global from './global';
import restaurant from './restaurant';

export default combineReducers({
    global: global,
    restaurant: restaurant
});