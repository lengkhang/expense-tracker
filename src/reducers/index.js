import { combineReducers } from 'redux';
import subjects from './SubjectsReducer';
import expense from './expense';

const rootReducer = combineReducers({
  subjects,
  expenses: expense
});

export default rootReducer;