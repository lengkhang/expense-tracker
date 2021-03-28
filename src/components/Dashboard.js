import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import { Title, Caption } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllSubjects } from '../actions/SubjectsActions';

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
  console.log('==> Dashboard-expenses:', totalExpensesThisMonth, groupByDate, sortedExpenses);
  const sampleData = {};// = {"1614441600000": [{"amount": 2000, "category": "CAR", "date": '2021-02-28T11:47:41.000Z', "description": "Car"}], "1615046400000": [{"amount": 0.5, "category": "FOOD_AND_DRINK", "date": '2021-03-07T11:48:49.000Z', "description": "Milo"}], "1616774400000": [{"amount": 100, "category": "GIFT", "date": '2021-03-27T11:50:09.000Z', "description": ""}], "1616860800000": [{"amount": 99999999, "category": "GIFT", "date": '2021-03-28T11:51:19.159Z', "description": "Test"}, {"amount": 200, "category": "FOOD_AND_DRINK", "date": '2021-03-28T11:49:56.509Z', "description": ""}, {"amount": 500, "category": "HOUSE", "date": '2021-03-28T11:47:21.762Z', "description": "Rent"}, {"amount": 100, "category": "GIFT", "date": '2021-03-28T11:45:51.274Z', "description": "Cp owe"}]};
  const sampleSortKey = null;// = ["1616860800000", "1616774400000", "1615046400000", "1614441600000"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Title>Welcome {sampleUser?.first_name},</Title>

        <MonthlyExpenseWidget caption="Total expenses this month" amount={`$ ${totalExpensesThisMonth}`} />
        {
          (sampleSortKey || sortedExpenses).map((date, i) => {
            return (<View key={`${date}-${i}`}>
              <Caption>{moment(new Date(parseInt(date))).format(dateFormat)}</Caption>
              
              {
                (sampleData[date] || groupByDate[date]).map((expensesForTheDay, j) => {
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
        }
       </ScrollView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  card: {
    marginVertical: 10,
  }
});