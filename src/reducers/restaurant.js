const b = 
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "newamerican",
          "title": "American (New)"
        },
        {
          "alias": "french",
          "title": "French"
        },
        {
          "alias": "wine_bars",
          "title": "Wine Bars"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "address1": "800 N Point St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94109",
        "country": "US",
        "state": "CA",
        "display_address": [
          "800 N Point St",
          "San Francisco, CA 94109"
        ],
        "cross_streets": ""
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"],
      "events": [
        {
          "title": "Kid's Party",
          "id": 1
        },
        {
          "title": "Holi Celebration",
          "id": 2
        }
      ],
      "offers": [
        {
          "title": "YFJIFWN",
          "id": 1
        },
        {
          "title": "BD287F",
          "id": 2
        }
      ],
      "questions": [
        {
          "title": "fwfwgwrg ergwrfwe fweovibrw vnweinwrgwegw egwe gowiefoiwew",
          "id": 1
        },
        {
          "title": "fwevuwnivowneo ivwihvnwvn wiweg we gwgwvnweinviwn",
          "id": 2
        }
      ]
    };
const restaurant = (state = {restaurant: b, offer: null, event: null, question: null}, action) => {

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