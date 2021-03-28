import moment from "moment";
import { ADD_EXPENSE } from '../constants/expense';

const INITIAL_STATE = {
};
 
export default expense = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      console.log('==> expense-action:', action.data);
      const { date, amount, description, category } = action.data;
      const dateFormat = 'DD MMMM YYYY';
      const formatedDate = moment(date).format(dateFormat);

      const expensesForTheDay = [
        { date, amount, description, category },
        ...(state.[formatedDate] || [])
      ];

      return {
        ...state,
        [formatedDate]: expensesForTheDay
      };
    default:
      return state
  }
};