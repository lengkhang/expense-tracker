import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

export default InputButton = ({ value, onTap }) => {
  const onPress = () => {
    onTap(value);
  };

  return (
    <TouchableRipple
      style={styles.inputButton}
      onPress={onPress}
      rippleColor="rgba(137, 196, 244, 1)">
        <Text style={styles.inputButtonText}>{value}</Text>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 250,
    width: '80%',
    height: '80%'
  },
  inputButtonText: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});