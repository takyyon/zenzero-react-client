class ConnectionService {
    constructor() {
        
    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        return !!this.getToken();
    }

    getAuthorizationHeader() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if(this.isLoggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken();
        }
        return headers;
    }
}

export default ConnectionService;