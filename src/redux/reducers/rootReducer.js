import { combineReducers } from 'redux';
import locationsReducer from './locationsReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  locationsReducer,
  weatherReducer
});