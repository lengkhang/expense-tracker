import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { Title } from 'react-native-paper';

export default AmountWidget = ({ value, onBackspace }) => {
  return (
    <View style={styles.container}>
        <Title style={styles.label}>Amount</Title>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>$</Text>
          <Text style={styles.amount}>{value}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20
  },
  label: {
    color: '#A9A9A9',
    fontWeight: 'bold'
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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  backspace: {
    marginLeft: 20,
    marginRight: -10
  },
  separatorLine: {
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
});