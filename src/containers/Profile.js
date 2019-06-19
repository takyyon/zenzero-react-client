import React from 'react';
import {connect} from 'react-redux';
import Profile from '../components/profile/Profile';


const stateToPropertyMapper = state => ({
    userInfo: state.profile.userInfo,
    question: state.profile.question,
    offer: state.profile.offer,
    event: state.profile.event,
});

const findBuyerInfoById = (dispatch, id) => {
    dispatch({type: 'FIND_BUYER_INFO_ID', id: id});
};

const findOwnerInfoById = (dispatch, id) => {
    dispatch({type: 'FIND_OWNER_INFO_ID', id: id});
};

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
    findBuyerInfoById: (id) => findBuyerInfoById(dispatch, id),
    findOwnerInfoById: (id) => findOwnerInfoById(dispatch, id),
    findQuestionById: (id) => findQuestionById(dispatch, id),
    findOfferById: (id) => findOfferById(dispatch, id),
    findEventById: (id) => findEventById(dispatch, id)
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Profile);

export default App;
