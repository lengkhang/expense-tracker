import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Styles from './styles';

export default MonthlyExpenseWidget = ({ caption, amount }) => {
  return (
    <Card style={Styles.container}>
      <Card.Title
        titleStyle={Styles.title}
        subtitleStyle={Styles.subtitle}
        title={amount}
        subtitle={caption}
      />
    </Card>
  );
};