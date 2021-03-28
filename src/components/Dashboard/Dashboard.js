import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllData } from '../../actions/application';
import MonthlyExpenseWidget from '../MonthlyExpenseWidget/MonthlyExpenseWidget';
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import Styles from './styles';
import moment from 'moment';

export default function Dashboard() {
  const { user, expenses } = useSelector(state => state);
  const { groupByDate, keysSortByDateDescending: sortedExpenses, totalExpensesThisMonth } = expenses;
  const { current: currentUser } = user;
  const dispatch = useDispatch();

  const dateFormat = 'DD MMMM YYYY';

  const fetchData = async () => {
    dispatch(fetchAllData());
  };

  useEffect(() => {
    fetchData();
  }, [currentUser.first_name]);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <Title>Welcome {currentUser?.first_name},</Title>

        <MonthlyExpenseWidget caption="Total expenses this month" amount={`$ ${totalExpensesThisMonth}`} />
        {
          sortedExpenses.map((date, i) => {
            return (<View key={`${date}-${i}`}>
              <Caption>{moment(new Date(parseInt(date))).format(dateFormat)}</Caption>

              {
                groupByDate[date].map((expensesForTheDay, j) => {
                  const { description, category, amount } = expensesForTheDay;

                  return (
                    <View key={`${expensesForTheDay}-${j}`} style={Styles.card}>
                      <ExpenseCard
                        category={category}
                        description={description}
                        amount={amount}
                      />
                    </View>
                  );
                })
              }
            </View>);
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}