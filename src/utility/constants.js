export const URL = window.location.href
                        .includes('localhost:') ?
                        'http://localhost:8080/api/':
                        'https://zenzero-nodejs-server.herokuapp.com/api/';

// Client: https://zenzero-react-client.herokuapp.com/
// Server: https://zenzero-nodejs-server.herokuapp.com/