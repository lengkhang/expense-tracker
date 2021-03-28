import React from 'react';
import { Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Styles from './styles';

const InputButton = ({ value, onTap }) => {
  const onPress = () => {
    onTap(value);
  };

  return (
    <TouchableRipple
      style={Styles.inputButton}
      onPress={onPress}
      rippleColor="rgba(137, 196, 244, 1)">
      <Text style={Styles.inputButtonText}>{value}</Text>
    </TouchableRipple>
  );
};

export default InputButton;