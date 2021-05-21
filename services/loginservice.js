import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/Login";

class loginservice {

    getLogin() {
        return axios.get(LOGIN_API_BASE_URL);
    }

    getUserbyUsername(username) {
        return axios.get(LOGIN_API_BASE_URL + '/' + username);
    }

    getPasswordbyUsername(password) {
        return axios.get(LOGIN_API_BASE_URL + '/' + password);
    }
}

export default new loginservice()