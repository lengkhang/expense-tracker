import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button
} from 'react-native-paper';
import { Input } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

import DatePicker from './DatePicker';
import Amount from './Amount';
import Keypad from './Keypad';
import Category from './Category/Category';

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from '../actions/expense';

//TODO: Move to utils/helper?

export default function AddExpense() {
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

  const onSubmit = (category) => {
    //TODO: Validate

    console.log('==> category:', category);

    setCategory(category);

    //TODO: Dispatch all data to redux store
    const payload = {
      date: selectedDate,
      amount,
      category,
      description
    };

    dispatch(addExpense(payload));

    navigation.navigate('Dashboard');
  };

  console.log('==> re-render:', amount, description);

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
        <Category title="Choose category" onSubmit={onSubmit}/>
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
    flex: 1,
    // alignItems:'center',justifyContent:'center',alignSelf:'stretch'
    // justifyContent: 'space-between'
    // alignItems: 'flex-start'
    // alignSelf: 'baseline'
  },
  button: {
    marginBottom: 6
  }
});