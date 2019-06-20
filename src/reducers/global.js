
const global = (state = {buyer: null, owner: null, restaurants: []}, action) => {

    switch (action.type) {
        case 'FETCH_USER':
            return { restaurants: state.restaurants, buyer: action.buyer, owner: action.owner};
        case 'LOGIN_OWNER':
            return { restaurants: state.restaurants, owner: action.owner, buyer: null };
        case 'LOGIN_BUYER':
            return { restaurants: state.restaurants, buyer: action.buyer, owner: null };
        case 'REGISTER_OWNER':
            return { restaurants: state.restaurants, owner: action.owner, buyer: null };
        case 'REGISTER_BUYER':
            return { restaurants: state.restaurants, buyer: action.buyer, owner: null };
        case 'FIND_ALL_RESTAURANTS':
            return { restaurants: action.restaurants, buyer: state.buyer, owner: state.owner};
        case 'FIND_RESTAURANT_BY_TERM_LOCATION':
            return { restaurants: action.restaurants, buyer: state.buyer, owner: state.owner};
        case 'LOGOUT_USER':
            return { restaurants: action.restaurants, buyer: null, owner: null};
        case 'UPDATE_OWNER':
        case 'UPDATE_BUYER':
        default:
            return state;
    }
}

export default global;