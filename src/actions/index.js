import axios from 'axios';

import {
    FETCH_CURRENCY
} from './types';

export function fetchCurrency () {
    const request = axios.get('http://api.fixer.io/latest?base=SEK');

    return {
        type: FETCH_CURRENCY,
        payload: request
    }
}