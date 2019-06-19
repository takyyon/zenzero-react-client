import {URL} from './../utility/constants';

class RestaurantService {

    static instance = null;

    static getInstance() {
        if(RestaurantService.instance == null) {
            RestaurantService.instance = new RestaurantService();
            RestaurantService.instance.init();
        }
        return RestaurantService.instance;
    }

    findRestaurantsByTermLocation = (term, location) => {
        const url = `${URL}restaurants?term=${term}&location=${location}`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    ownRestaurant = (id) => {
        const url = `${URL}restaurant/register/${id}`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

}

export default RestaurantService;