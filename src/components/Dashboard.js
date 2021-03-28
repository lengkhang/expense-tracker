import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Title, Caption } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllSubjects } from '../actions/SubjectsActions';

import AddExpense from './AddExpense';
import MonthlyExpenseWidget from './MonthlyExpenseWidget/MonthlyExpenseWidget';
import ExpenseCard from './ExpenseCard/ExpenseCard';
import moment from 'moment';

export default function Dashboard() {
  const [count, setCount] = useState({});

  const navigation = useNavigation();
  const { subjects, expenses } = useSelector(state => state);
  const { groupByDate, keysSortByDateDescending: sortedExpenses, totalExpensesThisMonth } = expenses;
  const { current, sampleUser } = subjects;
  const dispatch = useDispatch();

  const dateFormat = 'DD MMMM YYYY';

  const fetchData = async () => {
    dispatch(fetchAllSubjects());
  };

  useEffect(() => {
    fetchData();
  }, [subjects.sampleUser.first_name]);

  // console.log('==> sampleUser:', sampleUser);
  console.log('==> Dashboard-expenses:', totalExpensesThisMonth, groupByDate);
  const sampleData = {"03 January 2021": [{"amount": "5", "category": "GROCERY", "date": '2021-01-03T08:05:43.000Z', "description": "Highly"}], "20 February 2021": [{"amount": "4", "category": "CAR", "date": '2021-02-20T08:05:24.000Z', "description": "Ugh"}], "28 March 2021": [{"amount": "1", "category": "FOOD_AND_DRINK", "date": '2021-03-28T08:04:58.688Z', "description": "Dfsd"}, {"amount": "2", "category": "GIFT", "date": '2021-03-28T08:05:06.591Z', "description": "Diff"}, {"amount": "3", "category": "HOUSE", "date": '2021-03-28T08:05:14.299Z', "description": "Thug"}]};

  return (
    <View style={styles.container}>
      <Text>Welcome {sampleUser?.first_name},</Text>
      <MonthlyExpenseWidget caption="Total expenses this month" amount={`$ ${totalExpensesThisMonth}`} />
      {
        sortedExpenses.map((date, i) => {
          return (<View key={`${date}-${i}`}>
            <Caption>{moment(new Date(parseInt(date))).format(dateFormat)}</Caption>
            {
              groupByDate[date].map((expensesForTheDay, j) => {
                const { description, category, amount } = expensesForTheDay;

                return (
                  <View key={`${expensesForTheDay}-${j}`} style={styles.card}>
                    <ExpenseCard
                      category={category}
                      description={description}
                      amount={amount}
                    />
                  </View>
                )
              })
            }
            
          </View>);
        })

        // subjects.current.map((subject, index) => (
        //   <Button
        //     key={subject}
        //     title={ `${subject} ${count[subject] || ''}` }
        //     onPress={() => setCount({
        //       ...count,
        //       [subject]: (count[subject] || 0) + 1 }
        //     )}
        //   />
        // ))
      }

      {/* <Button
        title="Select more subjects"
        onPress={() =>
          navigation.navigate('Add expense') //TODO: create a const
        }
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  card: {
    marginVertical: 10,
  }
});