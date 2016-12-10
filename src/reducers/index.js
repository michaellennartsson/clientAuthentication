import { combineReducers } from 'redux';
import currencyReducer from './currency_converter';

const rootReducer = combineReducers({
  currency: currencyReducer
});

export default rootReducer;
