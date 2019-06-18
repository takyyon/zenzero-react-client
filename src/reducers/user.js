const user = (state = {buyer: null, owner: null}, action) => {

    switch (action.type) {
        case 'UPDATE_OWNER': return { owner: action.owner, buyer: null };
        case 'UPDATE_BUYER': return { buyer: action.buyer, owner: null };
        case 'LOGIN_OWNER': return { owner: action.owner, buyer: null };
        case 'LOGIN_BUYER': return { buyer: action.buyer, owner: null };
        case 'CREATE_USER':
        default:
            return state;
    }
}

export default user;