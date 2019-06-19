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
const restaurant = (state = {restaurants: [b]}, action) => {

    switch (action.type) {
        case 'FIND_RESTAURANT_BY_ID':
            return { restaurants: [action.restaurant]};
        default:
            return state;
    }
}

export default restaurant;