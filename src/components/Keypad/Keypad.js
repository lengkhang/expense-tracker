import React from 'react';
import { View } from 'react-native';
import InputButton from '../InputButton/InputButton';
import Styles from './styles';

const inputButtons = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['.', 0, '⌫']
];

const Keypad = ({ onKeyTap }) => {
  const onTap = (key) => {
    onKeyTap(key);
  };

  const keypadButtons = () => {
    const display = [];

    for (let row = 0; row < inputButtons.length; row++) {
      const rowButtons = inputButtons[0];
      const rowDisplay = [];

      for (let column = 0; column < rowButtons.length; column++) {
        rowDisplay.push(
          <InputButton
            value={inputButtons[row][column]}
            key={`${row}-${column}`}
            onTap={onTap}
          />
        );
      }

      display.push(
        <View style={Styles.inputRow} key={row}>{rowDisplay}</View>
      );
    }

    return display;
  };

  return (
    <View style={Styles.inputContainer}>
      {keypadButtons()}
    </View>
  );
};

export default Keypad;