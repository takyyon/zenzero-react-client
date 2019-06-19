import React from 'react';
import {connect} from 'react-redux';
import Restaurant from '../components/restaurant-detail/Restaurant';


const stateToPropertyMapper = state => ({
    restaurant: state.restaurant.restaurant,
    question: state.restaurant.question,
    offer: state.restaurant.offer,
    event: state.restaurant.event,
});

const findEventById = (dispatch, id) => {
    dispatch({type: 'FIND_EVENT_BY_ID', id: id});
};

const findQuestionById = (dispatch, id) => {
    dispatch({type: 'FIND_QUESTION_BY_ID', id: id});
};

const findOfferById = (dispatch, id) => {
    dispatch({type: 'FIND_OFFER_BY_ID', id: id});
};


const dispatchToPropertyMapper = dispatch => ({
    findQuestionById: (id) => findQuestionById(dispatch, id),
    findOfferById: (id) => findOfferById(dispatch, id),
    findEventById: (id) => findEventById(dispatch, id)
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Restaurant);

export default App;
