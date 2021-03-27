import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllSubjects } from '../actions/SubjectsActions';

import AddExpense from './AddExpense';

export default function Overview() {
  const [count, setCount] = useState({});

  const navigation = useNavigation();
  const { subjects } = useSelector(state => state);
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

  return (
    <View style={styles.container}>
      <Text>{sampleUser?.first_name}, you have { subjects.current.length } expenses.</Text>
      {
        subjects.current.map((subject, index) => (
          <Button
            key={subject}
            title={ `${subject} ${count[subject] || ''}` }
            onPress={() => setCount({
              ...count,
              [subject]: (count[subject] || 0) + 1 }
            )}
          />
        ))
      }

      <Button
        title="Select more subjects"
        onPress={() =>
          navigation.navigate('AddExpense') //TODO: create a const
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});