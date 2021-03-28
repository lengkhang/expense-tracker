import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

//TODO: Create tap effect

export default InputButton = ({ value, onTap }) => {
  const onPress = () => {
    // console.log('==> InputButton-onPress:', value);
    onTap(value);
  };

  return (
    <TouchableRipple
      style={styles.inputButton}
      onPress={onPress}
      rippleColor="rgba(137, 196, 244, 1)">
        <Text style={styles.inputButtonText}>{value}</Text>
    </TouchableRipple>

    // <TouchableOpacity style={styles.inputButton} onPress={onPress}>
    //   <Text style={styles.inputButtonText}>{value}</Text>
    // </TouchableOpacity>
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