
const global = (state = {user: null, restaurants: []}, action) => {

    switch (action.type) {
        case 'UPDATE_OWNER':
        case 'UPDATE_BUYER':
        case 'FETCH_USER':
        case 'LOGIN_OWNER':
        case 'LOGIN_BUYER':
        case 'REGISTER_OWNER':
        case 'REGISTER_BUYER':
            return { restaurants: state.restaurants, user: action.user };
        case 'FIND_ALL_RESTAURANTS':
            return { restaurants: action.restaurants, user: state.user };
        case 'FIND_RESTAURANT_BY_TERM_LOCATION':
            return { restaurants: action.restaurants, user: state.user };
        case 'LOGOUT_USER':
            return { restaurants: action.restaurants, user: null };
        default:
            return state;
    }
}

export default global;