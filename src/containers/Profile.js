import React from 'react';
import {connect} from 'react-redux';
import Profile from '../components/profile/Profile';
import RestaurantService from '../services/Restaurant';
import UserService from '../services/User';

const stateToPropertyMapper = state => ({
    userInfo: state.profile.userInfo,
    question: state.profile.question,
    offer: state.profile.offer,
    event: state.profile.event,
});

const restaurantService = RestaurantService.getInstance();
const userService = UserService.getInstance();

const findBuyerInfoById = (dispatch, id) => {
    userService
        .findBuyerInfoById(id)
        .then((user) => dispatch({type: 'FIND_BUYER_INFO_ID', userInfo: user}))
};

const deRegister = (dispatch, id, userId) => {
    restaurantService
        .deRegister(id)
        .then((response) => findOwnerInfoById(dispatch, userId))
};

const findOwnerInfoById = (dispatch, id) => {
    userService
        .findOwnerInfoById(id)
        .then((user) => dispatch({type: 'FIND_OWNER_INFO_ID', userInfo: user}))
};

const findEventById = (dispatch, id) => {
    restaurantService
        .findEventById(id)
        .then((event) => dispatch({type: 'FIND_EVENT_BY_ID', event: event}))
};

const findQuestionById = (dispatch, id) => {
    restaurantService
        .findQuestionById(id)
        .then((question) => dispatch({type: 'FIND_QUESTION_BY_ID', question: question}))
};

const findOfferById = (dispatch, id) => {
    restaurantService
        .findOfferById(id)
        .then((offer) => dispatch({type: 'FIND_OFFER_BY_ID', offer: offer}))
};

const dispatchToPropertyMapper = dispatch => ({
    findBuyerInfoById: (id) => findBuyerInfoById(dispatch, id),
    findOwnerInfoById: (id) => findOwnerInfoById(dispatch, id),
    findQuestionById: (id) => findQuestionById(dispatch, id),
    findOfferById: (id) => findOfferById(dispatch, id),
    findEventById: (id) => findEventById(dispatch, id),
    deRegister: (id, userId) => deRegister(dispatch, id, userId),
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Profile);

export default App;
