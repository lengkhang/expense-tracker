import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default MonthlyExpenseWidget = ({ caption, amount }) => {
  return (
    <Card style={styles.container}>
      <Card.Title
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
        title={amount}
        subtitle={caption}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    marginVertical: 30,
    backgroundColor: '#F0F8FF'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    lineHeight: 50,
    textAlign: 'right'
  },
  subtitle: {
    textAlign: 'right'
  }
});