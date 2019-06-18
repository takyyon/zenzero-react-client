import React from 'react';
import {connect} from 'react-redux';
import Zenzero from './Zenzero';


const stateToPropertyMapper = state => ({
    buyer: state.user.buyer,
    owner: state.user.owner
});


const dispatchToPropertyMapper = dispatch => ({
});


const App = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Zenzero);

export default App;
