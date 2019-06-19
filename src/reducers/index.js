import { combineReducers } from 'redux';
import global from './global';
import restaurant from './restaurant';
import profile from './profile';

export default combineReducers({
    global: global,
    restaurant: restaurant,
    profile: profile
});