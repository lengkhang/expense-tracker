import moment from 'moment';
import { ADD_EXPENSE } from '../constants/expense';

const INITIAL_STATE = {
  groupByDate: {},
  keysSortByDateDescending: [],
  totalExpensesThisMonth: 0
};

const isBelongToSameMonthAndYear = (dateToCheck) => {
  const today = new Date();

  return moment(dateToCheck).isSame(today, 'month') && moment(dateToCheck).isSame(today, 'year');
};

const calculateTotalExpensesForThisMonth = (allExpenses) => {
  let total = 0;

  Object.keys(allExpenses).forEach(dateTimeString => {
    const dateTime = new Date(parseInt(dateTimeString));

    if (isBelongToSameMonthAndYear(dateTime)) {
      total += allExpenses[dateTimeString].reduce((acc, expense) => {
        return acc + parseFloat(expense.amount);
      }, 0);
    }
  });

  return total;
};

const expense = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      const { date, amount, description, category } = action.data;
      const dateFormat = 'DD MMMM YYYY';
      const formatedDate = moment(date).format(dateFormat);

      const dateTime = new Date(formatedDate).getTime();

      const expensesForTheDay = [
        { date, amount, description, category },
        ...(state.groupByDate.[dateTime] || [])
      ];

      const groupByDate = {
        ...state.groupByDate,
        [dateTime]: expensesForTheDay
      };

      const sortOrder = Object.keys(groupByDate).sort((a, b) => b - a);

      return {
        ...state,
        groupByDate,
        keysSortByDateDescending: sortOrder,
        totalExpensesThisMonth: calculateTotalExpensesForThisMonth(groupByDate)
      };
    default:
      return state;
  }
};

export default expense;