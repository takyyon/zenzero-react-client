const b = [
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
    }];

const o = {
  id: 1,
  name: 'Krrish Mittal',
  user_id: 1311113
}
const global = (state = {buyer: o, owner: null, restaurants: b}, action) => {

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