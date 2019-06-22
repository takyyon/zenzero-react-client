import React from 'react';
import {connect} from 'react-redux';
import Zenzero from './Zenzero';
import RestaurantService from '../services/Restaurant';
import UserService from '../services/User';


const stateToPropertyMapper = state => ({
    user: state.global.user,
    restaurants: state.global.restaurants
});

const restaurantService = RestaurantService.getInstance();
const userService = UserService.getInstance();

const findRestaurantsByTermLocation = (dispatch, term, location) => {
    restaurantService
        .findRestaurantsByTermLocation(term, location)
        .then((restaurants) => {
            dispatch({type: 'FIND_RESTAURANT_BY_TERM_LOCATION', restaurants: restaurants})})
};

const saveInLocalStorage = (dispatch, response) => {    
    if(response.ok) {
        response.json()
            .then((res) => {
                userService.setToken(res.token);
                return fetchUserInSession(dispatch);
            });
    }
}

const loginBuyer = (dispatch, email, password) => {
    userService
        .loginBuyer(email, password)
        .then((response) => saveInLocalStorage(dispatch, response))
};

const loginOwner = (dispatch, email, password) => {
    userService
        .loginOwner(email, password)
        .then((response) => saveInLocalStorage(dispatch, response))
};

const registerOwner = (dispatch, name, email, password) => {
    userService
        .registerUser(name, email, password, 'owner')
        .then((response) => saveInLocalStorage(dispatch, response))
};

const registerBuyer = (dispatch, name, email, password) => {
    userService
        .registerUser(name, email, password, 'buyer')
        .then((response) => saveInLocalStorage(dispatch, response))
};

const fetchUserInSession = (dispatch) => {
    userService
        .fetchUser()
        .then((response) => {
            if(response.ok) {
                response.json().then((user) => {
                    dispatch({ type:'FETCH_USER', user: user});
                });
            }else {
                dispatch({ type: 'FETCH_USER', user: null});
            }
        });
};

const updateUser = (dispatch, newUser) => {
    userService
        .updateUser(newUser)
        .then((response) => saveInLocalStorage(dispatch, response))
}

const registerUserAsSecondType = (dispatch, type) => {
    userService
        .registerUserAsSecondType(type)
        .then((response) => saveInLocalStorage(dispatch, response))
};

const logout = (dispatch) => {
    userService
        .logout()
        .then((res) => dispatch({type: 'LOGOUT_USER'}))
};

const switchUser = (dispatch) => {
    userService
        .switchUser()
        .then((response) => saveInLocalStorage(dispatch, response))
};

const ownRestaurant = (dispatch, id, term, location) => {
    restaurantService
        .ownRestaurant(id, term, location)
        .then((response) => findRestaurantsByTermLocation(dispatch, term, location))
};

const deRegister = (dispatch, id, term, location) => {
    restaurantService
        .deRegister(id, term, location)
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
    ownRestaurant: (id, term, location) => ownRestaurant(dispatch, id, term, location),
    deRegister: (id, term, location) => deRegister(dispatch, id, term, location),
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Zenzero);

export default App;
