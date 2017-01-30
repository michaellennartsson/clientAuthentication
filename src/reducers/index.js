import { combineReducers } from 'redux';
import currencyReducer from './currency_converter';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
