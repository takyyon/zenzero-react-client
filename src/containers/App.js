import React from 'react';
import {connect} from 'react-redux';
import Zenzero from './Zenzero';
import RestaurantService from '../services/restaurant';
import UserService from '../services/User';


const stateToPropertyMapper = state => ({
    buyer: state.global.buyer,
    owner: state.global.owner,
    restaurants: state.global.restaurants
});

const restaurantService = RestaurantService.getInstance();
const userService = UserService.getInstance();

const findRestaurantsByTermLocation = ({dispatch, term, location}) => {
    restaurantService
        .findRestaurantsByTermLocation(term, location)
        .then((restaurants) => dispatch({type: 'FIND_RESTAURANT_BY_TERM_LOCATION', restaurants: restaurants}))
};

const loginBuyer = ({dispatch, email, password}) => {
    userService
        .loginBuyer(email, password)
        .then((user) => dispatch({ type:'LOGIN_BUYER', buyer: user}))
};

const loginOwner = ({dispatch, email, password}) => {
    userService
        .loginOwner(email, password)
        .then((user) => dispatch({ type:'LOGIN_OWNER', owner: user}))
};

const registerOwner = ({dispatch, name, email, password}) => {
    userService
        .registerUser(name, email, password, 'owner')
        .then((user) => dispatch({ type:'REGISTER_OWNER', owner: user}))
};

const registerBuyer = ({dispatch, name, email, password}) => {
    userService
        .registerUser(name, email, password, 'buyer')
        .then((user) => dispatch({ type:'REGISTER_BUYER', buyer: user}))
};

const fetchUserInSession = ({dispatch}) => {
    userService
        .fetchUser()
        .then((user) => dispatch({ type:'FETCH_USER', buyer: user.buyer, owner: user.owner}))
};

const updateUser = ({dispatch, newUser}) => {
    userService
        .updateUser(newUser)
        .then((response) => fetchUserInSession(dispatch))
}

const registerUserAsSecondType = ({dispatch, type}) => {
    userService
        .registerUserAsSecondType(type)
        .then((response) => fetchUserInSession(dispatch))
};

const logout = ({dispatch}) => {
    userService
        .logout()
        .then((res) => dispatch({type: 'LOGOUT_USER'}))
};

const switchUser = ({dispatch}) => {
    userService
        .switchUser()
        .then((res) => fetchUserInSession(dispatch))
};

const ownRestaurant = ({dispatch, id, term, location}) => {
    restaurantService
        .ownRestaurant(id, term, location)
        .then((response) => findRestaurantsByTermLocation(dispatch, term, location))
};


const dispatchToPropertyMapper = dispatch => ({
    findRestaurantsByTermLocation: (term, location) => findRestaurantsByTermLocation(dispatch, term, location),
    loginBuyer: (email, password) => loginBuyer(dispatch, email, password),
    loginOwner: (email, password) => loginOwner(dispatch, email, password),
    registerBuyer: (name, email, password) => registerBuyer(dispatch, name, email, password),
    registerOwner: (name, email, password) => registerOwner(dispatch, name, email, password),
    fetchUserInSession: () => fetchUserInSession(dispatch),
    updateUser: (newUser) => updateUser(dispatch, newUser),
    registerUserAsSecondType: (type) => registerUserAsSecondType(dispatch, type),
    logout: () => logout(dispatch),
    switchUser: () => switchUser(dispatch),
    ownRestaurant: (id, term, location) => ownRestaurant(dispatch, term, location)
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Zenzero);

export default App;
