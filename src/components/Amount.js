import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//TODO: Clean up styling

export default Amount = ({ value: initialValue }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <View style={styles.container}>
      <Text>Amount</Text>
      <View style={styles.content}>
        <Text style={styles.currencySymbol}>$</Text>
        <Text style={styles.amount}>{value}</Text>
        <Text style={styles.currencyText}>USD</Text>
      </View>
      <View style={styles.separatorLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
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
    flex: 2,
    fontSize: 40,
    fontWeight: 'bold'
  },
  currencyText: {
    flex: 1,
    color: 'gray',
    fontSize: 20
  },
  separatorLine: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});