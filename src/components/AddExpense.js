import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button,
  Menu
} from 'react-native-paper';
import { Input } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

import { addSubject } from '../actions/SubjectsActions';

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
  const [showCategory, setShowCategory] = useState(false);
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

    console.log('==> dispatch:', payload);
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

      
{/* 
      <Card>
        <Card.Content>
          <Input
            label="Category"
            leftIcon={
              <SimpleLineIcons name="note" size={24} color="black" />
            }
          />
        </Card.Content>
      </Card> */}
      
      <View style={styles.input}>
        <Input
          label="Description"
          onChangeText={text => setDescription(text)}
          leftIcon={
            <SimpleLineIcons name="note" size={24} color="black" />
          }
        />
        {/* <TextInput
          mode="outlined"
          label="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        /> */}
      </View>

      <View style={styles.keypadContainer}>
        <Keypad onKeyTap={onKeyPadTap}/>
      </View>

      <View style={styles.button}>
        <Category visible={showCategory} close={() => setShowCategory(false)} onSubmit={onSubmit}/>
        <Button color="#0000FF" mode="contained" onPress={() => setShowCategory(true)}>
          {category}
        </Button>
      </View>
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
          navigation.navigate('Dashboard')
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