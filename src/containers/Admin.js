import React from 'react';
import {connect} from 'react-redux';
import AdminView from './../components/admin/Admin';
import RestaurantService from '../services/Restaurant';
import UserService from '../services/User';


const stateToPropertyMapper = state => ({
    users: state.admin.users,
    events: state.admin.events,
    offers: state.admin.offers,
    questions: state.admin.questions
});

const restaurantService = RestaurantService.getInstance();
const userService = UserService.getInstance();

const getAllUsers = (dispatch) => {
    userService.getAllUsers()
        .then((res) => {
            if(res.ok) {
                res.json().then((users) => {
                    dispatch({type: 'GET_USERS', users: users});
                });
            }
        });
}

const getAllQuestions = (dispatch) => {
    restaurantService.getAllQuestions()
        .then((res) => {
            if(res.ok) {
                res.json().then((questions) => {
                    dispatch({type: 'GET_QUESTIONS', questions: questions});
                });
            }
        });
}

const getAllOffers = (dispatch) => {
    restaurantService.getAllOffers()
        .then((res) => {
            if(res.ok) {
                res.json().then((offers) => {
                    dispatch({type: 'GET_OFFERS', offers: offers});
                });
            }
        });
}

const getAllEvents = (dispatch) => {
    restaurantService.getAllEvents()
        .then((res) => {
            if(res.ok) {
                res.json().then((events) => {
                    dispatch({type: 'GET_EVENTS', events: events});
                });
            }
        });
}

const dispatchToPropertyMapper = dispatch => ({
    getAllUsers: () => getAllUsers(dispatch),
    getAllEvents: () => getAllEvents(dispatch),
    getAllOffers: () => getAllOffers(dispatch),
    getAllQuestions: () => getAllQuestions(dispatch),

});


const Admin = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(AdminView);

export default Admin;
