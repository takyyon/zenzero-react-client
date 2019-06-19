const o = {
  id: 1,
  name: 'Krrish Mittal',
  buyerId: 12,
  isDual: false,
  offers: [

  ],
  questions: [

  ],
  events: [

  ]
};
const o1 = {
    id: 1,
    name: 'Krrish Mittal',
    buyerId: 12,
    isDual: false,
    restaurants: [
        {
            "rating": 4,
            "price": "$",
            "phone": "+14152520800",
            "id": "E8RJkjfdcwgtyoPMjQ_Olg",
            "alias": "four-barrel-coffee-san-francisco",
            "is_closed": false,
            "categories": [
              {
                "alias": "coffee",
                "title": "Coffee & Tea"
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
              "city": "San Francisco",
              "country": "US",
              "address2": "",
              "address3": "",
              "state": "CA",
              "address1": "375 Valencia St",
              "zip_code": "94103"
            },
            "distance": 1604.23,
            "transactions": ["pickup", "delivery"]
          }
    ]
  }
const profile = (state = { userInfo: o1, offer: null, event: null, question: null  }, action) => {

    switch (action.type) {
        case 'FIND_BUYER_INFO_ID':
            return {
                userInfo: state.userInfo,
                offer: null,
                event: null,
                question: null
            };
        
        case 'FIND_OWNER_INFO_ID':
            return {
                userInfo: state.userInfo,
                offer: null,
                event: null,
                question: null
            };

        case 'FIND_EVENT_BY_ID':
                return {
                    userInfo: state.userInfo,
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
                userInfo: state.userInfo,
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
                userInfo: state.userInfo,
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

export default profile;