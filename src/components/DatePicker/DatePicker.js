import React, { useState, Fragment } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { Overlay } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import Styles from './styles';

const DatePicker = ({ value, onValueChange }) => {
  const dateDisplayFormat = 'dddd, DD MMMM YYYY';
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value || new Date());
  const [dateDisplay, setDateDisplay] = useState(moment(date).format(dateDisplayFormat));

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    onValueChange && onValueChange(currentDate);

    setDate(currentDate);
    setDateDisplay(moment(currentDate).format(dateDisplayFormat));
    setShow(Platform.OS === 'ios');
  };

  return (
    <View>
      <TouchableOpacity onPress={showOverlay} style={Styles.inputContainerStyle}>
        <Ionicons name="calendar" size={24} color="#1890ff" />
        <Text style={Styles.textStyle}>{dateDisplay}</Text>
      </TouchableOpacity>

      {
        Platform.OS === 'ios' ? (
          <Overlay isVisible={show} onBackdropPress={hideOverlay} overlayStyle={Styles.overlayStyle}>
            <View style={Styles.headerStyle}>
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
              show && <DateTimePicker
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
};

export default DatePicker;