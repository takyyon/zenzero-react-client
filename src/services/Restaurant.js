import {URL} from './../utility/constants';
import ConnectionService from './ConnectionService';

class RestaurantService extends ConnectionService {

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
        const data = {
            method: 'post',
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            }); 
    }

    deRegister = (id) => {
        const url = `${URL}restaurants/${id}/de-register/`;
        const data = {
            method: 'post',
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
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
        const url = `${URL}events/${id}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    deleteEvent = (id) => {
        const url = `${URL}events/${id}/`;
        const data = {
            method: 'delete',
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            }); 
    }

    findQuestionById = (id) => {
        const url = `${URL}questions/${id}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    findOfferById = (id) => {
        const url = `${URL}offers/${id}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            }); 
    }

    deleteOffer = (id) => {
        const url = `${URL}offers/${id}/`;
        const data = {
            method: 'delete',
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            }); 
    }

    addComment = (id, comment) => {
        const url = `${URL}questions/${id}/comments/`;
        const data = {
            method: 'post',
            body: JSON.stringify({
                text: comment
            }),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    addQuesiton = (question, restaurantId) => {
        const url = `${URL}restaurants/${restaurantId}/questions/`;
        const data = {
            method: 'post',
            body: JSON.stringify({
                text: question
            }),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    addOffer = (code, text, start, end, restaurantId) => {
        const url = `${URL}restaurants/${restaurantId}/offers/`;
        
        const data = {
            method: 'post',
            body: JSON.stringify({
                code: code,
                text: text,
                start: start,
                end: end
            }),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    addEvent = (title, text, start, end, restaurantId) => {
        const url = `${URL}restaurants/${restaurantId}/events/`;
        const data = {
            method: 'post',
            body: JSON.stringify({
                title: title,
                text: text,
                start: start,
                end: end
            }),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    likeOffer = (id) => {
        const url = `${URL}offers/${id}/like/`;
        const data = {
            headers: this.getAuthorizationHeader()
        };
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    likeEvent = (id) => {
        const url = `${URL}events/${id}/like/`;
        const data = {
            headers: this.getAuthorizationHeader()
        };
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    unLikeOffer = (id) => {
        const url = `${URL}offers/${id}/un-like/`;
        const data = {
            headers: this.getAuthorizationHeader()
        };
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    unLikeEvent = (id) => {
        const url = `${URL}events/${id}/un-like/`;
        const data = {
            headers: this.getAuthorizationHeader()
        };
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    editOffer = (offer) => {
        const url = `${URL}offers/${offer.id}/`;
        const data = {
            method: 'put',
            body: JSON.stringify(offer),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    editEvent = (event) => {
        const url = `${URL}events/${event.id}/`;
        const data = {
            method: 'put',
            body: JSON.stringify(event),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }
}

export default RestaurantService;