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
    paddingVertical: 35,
    paddingHorizontal: 15,
    marginVertical: 30,
    backgroundColor: '#F0F8FF'
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    lineHeight: 45,
    textAlign: 'right'
  },
  subtitle: {
    textAlign: 'right'
  }
});