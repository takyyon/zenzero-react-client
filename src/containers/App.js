import React from 'react';
import {connect} from 'react-redux';
import Zenzero from './Zenzero';


const stateToPropertyMapper = state => ({
    buyer: state.global.buyer,
    owner: state.global.owner,
    restaurants: state.global.restaurants
});


const dispatchToPropertyMapper = dispatch => ({
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Zenzero);

export default App;
