
const profile = (state = { userInfo: null, offer: null, event: null, question: null  }, action) => {

    switch (action.type) {
        case 'FIND_BUYER_INFO_ID':
            return {
                userInfo: action.userInfo,
                offer: null,
                event: null,
                question: null
            };
        
        case 'FIND_OWNER_INFO_ID':
            return {
                userInfo: action.userInfo,
                offer: null,
                event: null,
                question: null
            };

        case 'FIND_EVENT_BY_ID':
                return {
                    userInfo: state.userInfo,
                    offer: null,
                    event: action.event,
                    question: null
                };
        case 'FIND_OFFER_BY_ID':
            return {
                userInfo: state.userInfo,
                event: null,
                offer: action.offer,
                question: null
            };
        case 'FIND_QUESTION_BY_ID':
            return {
                userInfo: state.userInfo,
                event: null,
                question: action.question,
                offer: null
            };
        default:
            return state;
    }
}

export default profile;