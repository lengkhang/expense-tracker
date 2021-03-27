import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import {Overlay, Header} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

import moment from "moment";

//TODO: Clean up styling

export default DatePicker = ({ value, onValueChange }) => {
  const dateDisplayFormat = 'dddd, DD MMMM YYYY';
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value || new Date());
  const [dateDisplay, setDateDisplay] = useState(moment(date).format(dateDisplayFormat));

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false); 
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    onValueChange && onValueChange(currentDate);

    setDate(currentDate);
    setDateDisplay(moment(currentDate).format(dateDisplayFormat));
    setShow(Platform.OS === 'ios');
  };

  return (
    <View>
      <TouchableOpacity onPress={showOverlay} style={styles.inputContainerStyle}>
        <Ionicons name='calendar' size={24} color='#1890ff' />
        <Text style={styles.textStyle}>{dateDisplay}</Text>
      </TouchableOpacity>
      
      {
        Platform.OS === 'ios' ? (
          <Overlay isVisible={show} onBackdropPress={hideOverlay} overlayStyle={styles.overlayStyle}>
            <View style={styles.headerStyle}>
              <TouchableOpacity onPress={hideOverlay}>
                <Text style={{ paddingHorizontal: 15, color: 'green' }}>Done</Text>
              </TouchableOpacity>
            </View>

            <DateTimePicker
              testID="dateTimePicker"
              mode="date"
              value={date}
              display="spinner"
              onChange={onChange}
              style={{ backgroundColor: 'white' }}
            />
          </Overlay>
        ) : (
          <Fragment>
            {
              show &&  <DateTimePicker
                testID="dateTimePicker"
                mode="date"
                value={date}
                display="spinner"
                onChange={onChange}
                style={{ backgroundColor: 'white' }}
              />
            } 
          </Fragment>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1, 
    width: '100%', 
    justifyContent: 'flex-end',  
    backgroundColor: '#00000066',
  },
  headerStyle: {
    backgroundColor: 'white', 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,  
    borderColor: '#CDCDCD', 
    borderBottomWidth: 1, 
    height: 50, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    flexDirection: 'row', 
  },
 inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#CAD3DF',
    // borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    height: 50,
  },
  placeholderStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: '#CDCDCD',
    marginHorizontal: 10,
  },
  textStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    marginHorizontal: 10,
  }
});