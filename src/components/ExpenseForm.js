import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button
} from 'react-native-paper';
import { Input } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

import DatePicker from './DatePicker';
import Amount from './AmountWidget';
import Keypad from './Keypad';
import Category from './Category/Category';

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from '../actions/expense';
import { NAVIGATION } from '../constants/navigation';

export default ExpenseForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { subjects } = useSelector(state => state);

  const initialDate = new Date();
  let INITIAL_AMOUNT = '0';

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [amount, setAmount] = useState(INITIAL_AMOUNT);
  const [category, setCategory] = useState('Choose category');
  const [description, setDescription] = useState('');

  const onKeyPadTap = (key) => {
    if (key !== '⌫') {
      const amountToDisplay = `${amount}${key}`;

      const allowNumeric = /^\d{1,6}(\.)?(\d{1,2})?$/.test(amountToDisplay);
      const allowLeadingZeroDecimal = /^0\.(\d{1,2})?$/.test(amountToDisplay);
      
      if(allowLeadingZeroDecimal) {
        setAmount(amountToDisplay);
      } else if (allowNumeric) {
        setAmount(amountToDisplay.replace(/^0/, ''));
      }
    } else {
      const amountToDisplay = amount.substr(0, amount.length-1) || INITIAL_AMOUNT;

      setAmount(amountToDisplay);
    }
  };

  const canSubmit = () => {
    return parseFloat(amount) > 0;
  };

  const onSubmit = (category) => {
    const amountInFloat = parseFloat(amount);

    setCategory(category);

    const payload = {
      date: selectedDate,
      amount: amountInFloat,
      category,
      description
    };

    dispatch(addExpense(payload));

    navigation.navigate(NAVIGATION.DASHBOARD);
  };

  return (
    <View style={styles.container}>
      <DatePicker value={initialDate} onValueChange={date => setSelectedDate(date)}/>

      <Card>
        <Card.Content>
          <Amount value={amount}/>
        </Card.Content>
      </Card>
      
      <View style={styles.input}>
        <Input
          label="Description"
          onChangeText={text => setDescription(text)}
          leftIcon={
            <SimpleLineIcons name="note" size={24} color="black" />
          }
        />
      </View>

      <View style={styles.keypadContainer}>
        <Keypad onKeyTap={onKeyPadTap}/>
      </View>

      <View style={styles.button}>
        <Category disabled={!canSubmit()} title="Submit" onSubmit={onSubmit}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    height: '100%'
  },
  input: {
    paddingHorizontal: 10,
    marginTop: 40,
    marginBottom: 20
  },
  keypadContainer: {
    flex: 1
  },
  button: {
    marginBottom: 6
  }
});