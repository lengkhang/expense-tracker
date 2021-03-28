import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';

import InputButton from './InputButton';

//TODO: Clean up styling

const inputButtons = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['.', 0, '⌫']
]

export default Keypad = ({ onKeyTap }) => {
  const [show, setShow] = useState(false);

  const onTap = (key) => {
    onKeyTap(key)
  };

  const keypadButtons = () => {
    const display = [];

    for (let row=0; row < inputButtons.length; row++) {
      const rowButtons = inputButtons[0];
      const rowDisplay = [];

      for (let column=0; column < rowButtons.length; column++) {
        rowDisplay.push(
          <InputButton
            value={inputButtons[row][column]}
            key={`${row}-${column}`}
            onTap={onTap}
          />
        );
      }

      display.push(
        <View style={styles.inputRow} key={row}>{rowDisplay}</View>
      );
    }

    return display;
  };

  return (
    <View style={styles.inputContainer}>
      {keypadButtons()}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 8
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
  },
});