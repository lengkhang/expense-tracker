import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Title, Caption } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllSubjects } from '../actions/SubjectsActions';

import AddExpense from './AddExpense';
import ExpenseCard from './ExpenseCard/ExpenseCard';

export default function Dashboard() {
  const [count, setCount] = useState({});

  const navigation = useNavigation();
  const { subjects, expenses } = useSelector(state => state); 
  const { current, sampleUser } = subjects;
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(fetchAllSubjects());
    console.log('Every post has been, getted');
  };

  useEffect(() => {
    fetchData();
  }, [subjects.sampleUser.first_name]);

  console.log('==> sampleUser:', sampleUser);
  console.log('==> Dashboard-expenses:', expenses);
  const sampleData = {"03 January 2021": [{"amount": "5", "category": "GROCERY", "date": '2021-01-03T08:05:43.000Z', "description": "Highly"}], "20 February 2021": [{"amount": "4", "category": "CAR", "date": '2021-02-20T08:05:24.000Z', "description": "Ugh"}], "28 March 2021": [{"amount": "1", "category": "FOOD_AND_DRINK", "date": '2021-03-28T08:04:58.688Z', "description": "Dfsd"}, {"amount": "2", "category": "GIFT", "date": '2021-03-28T08:05:06.591Z', "description": "Diff"}, {"amount": "3", "category": "HOUSE", "date": '2021-03-28T08:05:14.299Z', "description": "Thug"}]};

  return (
    <View style={styles.container}>
      <Text>{sampleUser?.first_name}, you have { subjects.current.length } expenses.</Text>
      {
        Object.keys(sampleData).map(date => {
          return (<View key={date}>
            <Caption>{date}</Caption>
            {
              sampleData[date].map((expensesForTheDay, i) => {
                const { description, category, amount } = expensesForTheDay;

                return (
                  <View key={`${expensesForTheDay}-${i}`} style={styles.card}>
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
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  card: {
    marginVertical: 10,
  }
});