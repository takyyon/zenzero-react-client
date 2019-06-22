import {URL} from './../utility/constants';
import ConnectionService from './ConnectionService';

class UserService extends ConnectionService{

    static instance = null;

    static getInstance() {
        if(UserService.instance == null) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    loginBuyer(email, password) {
        const url = `${URL}users/buyer/login/`;
        
        const credentials = {
            'email': email,
            'password': password
        };
        const data = {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    loginOwner(email, password) {
        const url = `${URL}users/owner/login/`;
        const credentials = {
            'email': email,
            'password': password
        };
        
        const data = {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    fetchUser() {
        const url = `${URL}users/session/`;
        const data = {
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    getAllUsers() {
        const url = `${URL}users/`;
        return fetch(url)
            .then(function(response) {
                return response;
            });
    }

    registerUser = (name, email, password, type) => {
        const url = `${URL}users/register/${type}/`;
        const user = {
            'email': email,
            'password': password,
            'name': name
        };
        const data = {
            method: 'post',
            body: JSON.stringify(user),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    findBuyerInfoById = (id) => {
        const url = `${URL}users/${id}/buyer/`; 
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    findOwnerInfoById = (id) => {
        const url = `${URL}users/${id}/owner/`; 
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    registerUserAsSecondType = (type)  => {
        const url = `${URL}users/${type}/register`; 
        const data = {
            
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    updateUser(newUser) {
        const url = `${URL}users/update/`;
        const data = {
            method: 'put',
            body: JSON.stringify(newUser),
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    logout() {
        this.removeToken();
        const url = `${URL}users/logout/`;
        const data = {
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

    switchUser() {
        const url = `${URL}users/switch/`;
        const data = {
            headers: this.getAuthorizationHeader()
        }
        return fetch(url, data)
            .then(function(response) {
                return response;
            });
    }

}

export default UserService;