import React from 'react';
import {connect} from 'react-redux';
import Profile from '../components/profile/Profile';


const stateToPropertyMapper = state => ({
    userInfo: state.profile.userInfo
});

const findBuyerInfoById = (dispatch, id) => {
    dispatch({type: 'FIND_BUYER_INFO_ID', id: id});
};

const findOwnerInfoById = (dispatch, id) => {
    dispatch({type: 'FIND_OWNER_INFO_ID', id: id});
};


const dispatchToPropertyMapper = dispatch => ({
    findBuyerInfoById: (id) => findBuyerInfoById(dispatch, id),
    findOwnerInfoById: (id) => findOwnerInfoById(dispatch, id)
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Profile);

export default App;
