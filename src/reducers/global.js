const global = (state = {buyer: null, owner: null, restaurants: []}, action) => {

    switch (action.type) {
        case 'UPDATE_OWNER':
            return { restaurants: state.restaurants, owner: action.owner, buyer: null };
        case 'UPDATE_BUYER':
            return { restaurants: state.restaurants, buyer: action.buyer, owner: null };
        case 'LOGIN_OWNER':
            return { restaurants: state.restaurants, owner: action.owner, buyer: null };
        case 'LOGIN_BUYER':
            return { restaurants: state.restaurants, buyer: action.buyer, owner: null };
        case 'FIND_ALL_RESTAURANTS':
            return { restaurants: action.restaurants, buyer: state.buyer, owner: state.owner};
        default:
            return state;
    }
}

export default global;