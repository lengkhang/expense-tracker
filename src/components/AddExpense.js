import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { addSubject } from '../actions/SubjectsActions';

import DatePicker from './DatePicker';
import Amount from './Amount';
import Keypad from './Keypad';

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';

const isNumeric = num => {
  return !isNaN(num);
}
 
export default function AddExpense() {
  const navigation = useNavigation();
  const { subjects } = useSelector(state => state);
  const dispatch = useDispatch();
  let selectedDate = new Date();
  let enteredAmount = 0;

  const onDateChange = (date) => {
    selectedDate = date;
  };

  const onKeyPadTap = (key) => {
    if (isNumeric(key)) {

    }

  };

  return (
    <View style={styles.container}>
      <DatePicker value={selectedDate} onValueChange={onDateChange}/>
      <Amount value={enteredAmount}/>

      <View style={styles.input}>
        <Text>Category</Text>
        <TextInput
          placeholder="aabbbccc ..."
        />
      </View>
      
      <View style={styles.input}>
        <Text>Description</Text>
        <TextInput
          placeholder="something ..."
        />
      </View>
      
      <Keypad onKeyTap={onKeyPadTap}/>
    </View>
  );

  /*
  return (
    <View style={styles.container}>
      <Text>Select Subjects Below!</Text>

      {
        subjects.all_subjects.map((subject, index) => (
          <Button
            key={ subject }
            title={ `Add ${ subject }` }
            onPress={() =>
              dispatch(addSubject(index))
            }
          />
        ))
      }

      <Button
        title="Back to home"
        onPress={() =>
          navigation.navigate('My expenses')
        }
      />
    </View>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 20,
    marginVertical: 10
  }
});