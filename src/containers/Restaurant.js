import React from 'react';
import {connect} from 'react-redux';
import Restaurant from '../components/restaurant-detail/Restaurant';


const stateToPropertyMapper = state => ({
    restaurants: state.restaurant.restaurants,
});


const dispatchToPropertyMapper = dispatch => ({
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Restaurant);

export default App;
