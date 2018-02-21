import { combineReducers } from 'redux';
import InitialReducer from './initial';

const rootReducer = combineReducers({
  initial: InitialReducer,
});

export default rootReducer;
