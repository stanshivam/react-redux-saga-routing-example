import { combineReducers } from 'redux';
import userReducer from '../containers/users/reducer';

const rootReducer = combineReducers({
  userReducer
});

export default rootReducer;
