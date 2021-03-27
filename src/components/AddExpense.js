import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { addSubject } from '../actions/SubjectsActions';

import DatePicker from './DatePicker';
import Amount from './Amount';
import Keypad from './Keypad';

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';

//TODO: Move to utils/helper?
const isNumeric = num => {
  return !isNaN(num);
}
 
export default function AddExpense() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { subjects } = useSelector(state => state);

  let selectedDate = new Date();
  let INITIAL_AMOUNT = '0';

  const [amount, setAmount] = useState(INITIAL_AMOUNT);

  const onDateChange = (date) => {
    selectedDate = date;
  };

  const onKeyPadTap = (key) => {
    //TODO: Handle submit
    const amountToDisplay = `${amount}${key}`;

    const allowNumeric = /^\d{1,6}(\.)?(\d{1,2})?$/.test(amountToDisplay);
    const allowLeadingZeroDecimal = /^0\.(\d{1,2})?$/.test(amountToDisplay);
    
    if(allowLeadingZeroDecimal) {
      setAmount(amountToDisplay);
    } else if (allowNumeric) {
      setAmount(amountToDisplay.replace(/^0/, ''));
    }
  };

  const onBackspaceAmount = () => {
    const amountToDisplay = amount.substr(0, amount.length-1) || INITIAL_AMOUNT;

    setAmount(amountToDisplay);
  }

  console.log('==> re-render:', amount);
  return (
    <View style={styles.container}>
      <DatePicker value={selectedDate} onValueChange={onDateChange}/>
      <Amount value={amount} onBackspace={onBackspaceAmount}/>

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
  },
  input: {
    paddingHorizontal: 20,
    marginVertical: 10
  }
});