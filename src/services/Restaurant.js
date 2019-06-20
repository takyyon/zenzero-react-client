import {URL} from './../utility/constants';

class RestaurantService {

    static instance = null;

    static getInstance() {
        if(RestaurantService.instance == null) {
            RestaurantService.instance = new RestaurantService();
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
        const url = `${URL}restaurants/${id}/register/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    findRestaurantById = (id) => {
        const url = `${URL}restaurants/${id}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    findEventById = (id) => {
        const url = `${URL}restaurants/event/${id}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    deleteEvent = (id) => {
        const url = `${URL}restaurants/event/${id}/`;
        const data = {
            method: 'delete',
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            }); 
    }

    findQuestionById = (id) => {
        const url = `${URL}restaurants/question/${id}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    findOfferById = (id) => {
        const url = `${URL}restaurants/offer/${id}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    deleteOffer = (id) => {
        const url = `${URL}restaurants/offer/${id}/`;
        const data = {
            method: 'delete',
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            }); 
    }

    addComment = (id, comment) => {
        const url = `${URL}restaurants/question/${id}/comment/`;
        const data = {
            method: 'post',
            body: JSON.stringify({
                comment: comment
            }),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }

    addQuesiton = (question, restaurantId) => {
        const url = `${URL}restaurants/${restaurantId}/question/`;
        const data = {
            method: 'post',
            body: JSON.stringify({
                question: question
            }),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }

    addOffer = (code, text, start, end, restaurantId) => {
        const url = `${URL}restaurants/${restaurantId}/offer/`;
        const data = {
            method: 'post',
            body: JSON.stringify({
                code: code,
                text: text,
                start: start,
                end: end
            }),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }

    addEvent = (title, text, start, end, restaurantId) => {
        const url = `${URL}restaurants/${restaurantId}/event/`;
        const data = {
            method: 'post',
            body: JSON.stringify({
                title: title,
                text: text,
                start: start,
                end: end
            }),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }

    likeOffer = (id) => {
        const url = `${URL}restaurants/offer/${id}/like/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    likeEvent = (id) => {
        const url = `${URL}restaurants/event/${id}/like/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    editOffer = (offer) => {
        const url = `${URL}restaurants/offer/${offer.id}/`;
        const data = {
            method: 'put',
            body: JSON.stringify(offer),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }

    editEvent = (event) => {
        const url = `${URL}restaurants/event/${event.id}/`;
        const data = {
            method: 'put',
            body: JSON.stringify(event),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }
}

export default RestaurantService;