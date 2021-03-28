import React from 'react';
import { Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import Styles from './styles';

const AmountWidget = ({ value }) => {
  return (
    <View style={Styles.container}>
      <Title style={Styles.label}>Amount</Title>
      <View style={Styles.content}>
        <Text style={Styles.currencySymbol}>$</Text>
        <Text style={Styles.amount}>{value}</Text>
      </View>
    </View>
  );
};

export default AmountWidget;