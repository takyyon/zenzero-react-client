
const global = (state = {users: [], questions: [], events: [], offers: []}, action) => {

    switch (action.type) {
        case 'GET_USERS': 
            return {
                users: action.users,
                questions: state.questions,
                events: state.events,
                offers: state.offers
            }
        case 'GET_EVENTS':
            return {
                users: state.users,
                questions: state.questions,
                events: action.events,
                offers: state.offers
            }
        case 'GET_OFFERS':
            return {
                users: state.users,
                questions: state.questions,
                events: state.events,
                offers: action.offers
            }
        case 'GET_QUESTIONS':
            return {
                users: state.users,
                questions: action.questions,
                events: state.events,
                offers: state.offers
            }
        default:
            return state;
    }
}

export default global;