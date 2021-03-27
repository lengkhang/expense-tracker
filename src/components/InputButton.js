import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

//TODO: Create tap effect

export default InputButton = ({ value, onTap }) => {
  const onPress = () => {
    // console.log('==> InputButton-onPress:', value);
    onTap(value);
  };

  return (
    <TouchableOpacity style={styles.inputButton} onPress={onPress}>
      <Text style={styles.inputButtonText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputButtonText: {
      fontSize: 30,
      fontWeight: 'bold'
  }
});