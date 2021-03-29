import { combineReducers } from 'redux';
import emailState from './emailReducer';

const rootReducer = combineReducers({
  emailState,
})

export default rootReducer;