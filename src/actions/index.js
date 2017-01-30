import axios from 'axios';
import { browserHistory } from 'react-router';

import {
    FETCH_CURRENCY,
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:8000';

export function fetchCurrency () {
    const request = axios.get('http://api.fixer.io/latest?base=SEK');

    return {
        type: FETCH_CURRENCY,
        payload: request
    }
}

export function signInUser ({ email, password }) {
    // Return a function instead of an action with redux-thunk
    // able to access dispatch method
    return function (dispatch) {
        //console.log('email: ' + email + '\npassword: ' + password);

        // Submit email/password to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then((response) => {
                // If request is good
                // - Update state to indicate user is authentivaded
                dispatch({ type: AUTH_USER });
                
                // - Save JWT token
                localStorage.setItem('token', response.data.token);

                // - Redirect to '/user/'
                browserHistory.push('/user');
            })
            .catch(() => {
                // If request is bad
                // - Show error message to user
                dispatch(authError('Bad Login Info!'));
            })
    }
}

export function signUpUser ({ email, password}) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then( response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('user');
            })
            .catch( (response) => dispatch(authError('Email is in use!'))) //TODO: Get server response error
    }
}

export function authError (error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signOutUser() {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER }
}