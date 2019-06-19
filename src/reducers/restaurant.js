
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
              event: {
                title: 'Kid\'s Party',
                id: 1,
                text: 'List Item 1\nList Item 2\nList Item 3',
                start: '2019-04-02',
                end: '2019-04-19',
                restaurant: {
                  id: 'E8RJkjfdcwgtyoPMjQ_Olg',
                  name: 'Four Barrel Coffee'
                },
                going: true
              },
              question: null
            };
          case 'FIND_OFFER_BY_ID':
              return {
                restaurant: state.restaurant,
                event: null,
                offer: {
                  code: 'DHF393B',
                  id: 1,
                  text: 'List Item 1\nList Item 2\nList Item 3',
                  start: '2019-04-02',
                  end: '2019-04-19',
                  restaurant: {
                    id: 'E8RJkjfdcwgtyoPMjQ_Olg',
                    name: 'Four Barrel Coffee'
                  },
                  star: true
                },
                question: null
              };
          case 'FIND_QUESTION_BY_ID':
              return {
                restaurant: state.restaurant,
                event: null,
                question: {
                  text: 'What are the opening times of the restaurant?',
                  id: 1,
                  created: '2019-01-04 05:09 PM',
                  comments: [
                    {
                      id: 1,
                      user_id: 1,
                      created: '2019-08-04 01:20 PM',
                      text: 'Starts from 123.'
                    }
                  ],
                  user: {
                    id: 1,
                    name: 'Krrish Mittal'
                  },
                  restaurant: {
                    id: 1,
                    name: 'The Maharaja'
                  }
                },
                offer: null
              };
        default:
            return state;
    }
}

export default restaurant;