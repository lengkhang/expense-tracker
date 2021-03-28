import { combineReducers } from 'redux';
import subjects from './SubjectsReducer';
import expense from './expense';

export default rootReducer = combineReducers({
  subjects,
  expenses: expense
});