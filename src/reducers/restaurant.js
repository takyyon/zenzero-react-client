
const restaurant = (state = {restaurant: null, offer: null, event: null, question: null}, action) => {

    switch (action.type) {
        case 'FIND_RESTAURANT_BY_ID':
            return {
              restaurant: action.restaurant,
              offer: null,
              event: null,
              question: null
            };
        case 'FIND_EVENT_BY_ID':
            return {
              restaurant: state.restaurant,
              offer: null,
              event: action.event,
              question: null
            };
          case 'FIND_OFFER_BY_ID':
              return {
                restaurant: state.restaurant,
                event: null,
                offer: action.offer,
                question: null
              };
          case 'FIND_QUESTION_BY_ID':
              return {
                restaurant: state.restaurant,
                event: null,
                question: action.question,
                offer: null
              };
        default:
            return state;
    }
}

export default restaurant;