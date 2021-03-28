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
  const sampleData = {"27 February 2021": [{"amount": "50.25", "category": "second", "date": '2021-02-27T04:19:23.000Z', "description": "High"}], "28 March 2021": [{"amount": "2", "category": "normal", "date": '2021-03-28T04:19:05.325Z', "description": "Aaa"}, {"amount": "9", "category": "normal", "date": '2021-03-28T04:19:12.982Z', "description": "Ghf"}]};

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