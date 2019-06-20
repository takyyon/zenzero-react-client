import {URL} from './../utility/constants';

class UserService {

    static instance = null;

    static getInstance() {
        if(UserService.instance == null) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    loginBuyer(email, password) {
        const url = `${URL}login/buyer?email=${email}&password=${password}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    loginOwner(email, password) {
        const url = `${URL}login/owner?email=${email}&password=${password}/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    fetchUser() {
        const url = `${URL}user/session/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    registerUser = (name, email, password, type) => {
        const url = `${URL}user/register/${type}/`;
        const user = {
            name: name,
            email: email,
            password: password
        };
        const data = {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }

    findBuyerInfoById = (id) => {
        const url = `${URL}user/${id}/buyer/`; 
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    findOwnerInfoById = (id) => {
        const url = `${URL}user/${id}/owner/`; 
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    registerUserAsSecondType = (type)  => {
        const url = `${URL}user/dual-register/${type}/`; 
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    updateUser(newUser) {
        const url = `${URL}user/update/${newUser.userId}/`;
        const data = {
            method: 'put',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        }
        return fetch(url, data)
            .then(function(response) {
                return response.json();
            });
    }

    logout() {
        const url = `${URL}logout/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    switchUser() {
        const url = `${URL}switch-user/`;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

}

export default UserService;