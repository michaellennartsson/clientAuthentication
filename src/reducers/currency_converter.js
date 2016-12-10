import {
    FETCH_CURRENCY
} from '../actions/types';

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_CURRENCY:
            return action.payload.data
    }

    return state;
}