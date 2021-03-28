import { combineReducers } from 'redux';
import user from './user';
import expense from './expense';

const rootReducer = combineReducers({
  user,
  expenses: expense
});

export default rootReducer;