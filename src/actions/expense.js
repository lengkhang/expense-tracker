import { ADD_EXPENSE } from '../constants/expense';

export const addExpense = payload => (
  {
    type: 'ADD_EXPENSE',
    data: payload,
  }
);
