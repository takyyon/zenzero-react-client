import React from 'react';
import {connect} from 'react-redux';
import Restaurant from '../components/restaurant-detail/Restaurant';
import RestaurantService from '../services/restaurant';
import UserService from '../services/User';


const stateToPropertyMapper = state => ({
    restaurant: state.restaurant.restaurant,
    question: state.restaurant.question,
    offer: state.restaurant.offer,
    event: state.restaurant.event,
});

const restaurantService = RestaurantService.getInstance();
const userService = UserService.getInstance();

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

const findRestaurantById = (dispatch, id) => {
    restaurantService
        .findRestaurantById(id)
        .then((restaurant) => dispatch({type: 'FIND_RESTAURANT_BY_ID', restaurant: restaurant}))
};

const deleteEvent = (dispatch, id, restaurantId) => {
    restaurantService
        .deleteEvent(id)
        .then((response) => findRestaurantById(dispatch, restaurantId))
}; 

const deleteOffer = (dispatch, id, restaurantId) => {
    restaurantService
        .deleteOffer(id)
        .then((response) => findRestaurantById(dispatch, restaurantId))
}; 

const addComment = (dispatch, comment, id, restaurantId) => {
    restaurantService
        .addComment(id, comment)
        .then((response) => findRestaurantById(dispatch, restaurantId))
}; 

const addQuesiton = (dispatch, question, restaurantId) => {
    restaurantService
        .addQuesiton(question, restaurantId)
        .then((response) => findRestaurantById(dispatch, restaurantId))
};

const addOffer = (dispatch, code, text, start, end, restaurantId) => {
    restaurantService
        .addOffer(code, text, start, end, restaurantId)
        .then((response) => findRestaurantById(dispatch, restaurantId))
};

const addEvent = (dispatch, title, text, start, end, restaurantId) => {
    restaurantService
        .addEvent(title, text, start, end, restaurantId)
        .then((response) => findRestaurantById(dispatch, restaurantId))
};

const likeEvent = (dispatch, id, restaurantId) => {
    restaurantService
        .likeEvent(id)
        .then((response) => findRestaurantById(dispatch, restaurantId))
};

const likeOffer = (dispatch, id, restaurantId) => {
    restaurantService
        .likeOffer(id)
        .then((response) => findRestaurantById(dispatch, restaurantId))
};

const editOffer = (dispatch, offer, restaurantId) => {
    restaurantService
        .editOffer(offer)
        .then((response) => findRestaurantById(dispatch, restaurantId))
};

const editEvent = (dispatch, event, restaurantId) => {
    restaurantService
        .editEvent(event)
        .then((response) => findRestaurantById(dispatch, restaurantId))
};

const dispatchToPropertyMapper = dispatch => ({
    findRestaurantById: (id) => findRestaurantById(dispatch, id),
    findQuestionById: (id) => findQuestionById(dispatch, id),
    findOfferById: (id) => findOfferById(dispatch, id),
    findEventById: (id) => findEventById(dispatch, id),
    deleteEvent: (id, restaurantId) => deleteEvent(dispatch, id, restaurantId),
    deleteOffer: (id, restaurantId) => deleteOffer(dispatch, id, restaurantId),
    addComment: (comment, id, restaurantId) => addComment(dispatch, comment, id, restaurantId),
    addQuesiton: (question, restaurantId) => addQuesiton(dispatch, question, restaurantId),
    addOffer: (code, text, start, end, restaurantId) => addOffer(dispatch, code, text, start, end, restaurantId),
    addEvent: (title, text, start, end, restaurantId) => addEvent(dispatch, title, text, start, end, restaurantId),
    likeOffer: (id, restaurantId) => likeOffer(dispatch, id, restaurantId),
    likeEvent: (id, restaurantId) => likeEvent(dispatch, id, restaurantId),
    editOffer: (offer, restaurantId) => editOffer(dispatch, offer, restaurantId),
    editEvent: (event, restaurantId) => editEvent(dispatch, event, restaurantId)
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Restaurant);

export default App;
