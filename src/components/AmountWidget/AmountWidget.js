import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { Title } from 'react-native-paper';
import Styles from './styles';

export default AmountWidget = ({ value, onBackspace }) => {
  return (
    <View style={Styles.container}>
        <Title style={Styles.label}>Amount</Title>
        <View style={Styles.content}>
          <Text style={Styles.currencySymbol}>$</Text>
          <Text style={Styles.amount}>{value}</Text>
        </View>
    </View>
  );
}