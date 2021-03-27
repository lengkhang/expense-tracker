import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//TODO: Clean up styling

export default Amount = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text>Amount</Text>
      <View style={styles.content}>
        <Text style={styles.currencySymbol}>$</Text>
        <Text style={styles.amount}>{value}</Text>
        <Ionicons style={styles.backspace} name="backspace-outline" size={32} color="black" />
      </View>
      <View style={styles.separatorLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20
  },
  content: {
    flexDirection: 'row',
    fontSize: 30,
    alignItems: 'center',
  },
  currencySymbol: {
    flex: 1,
    fontSize: 30
  },
  amount: {
    // flex: 2,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  backspace: {
    marginLeft: 20,
    marginRight: -10
  },
  separatorLine: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
});