import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { CATEGORIES } from '../Category/constants';

export default ExpenseCard = ({ description, category, amount }) => {
  const Icon = CATEGORIES[category].icon;

  return (
    <Card>
      <Card.Title
        title={category}
        subtitle={description}
        left={(props) => <Icon {...props} />}
        right={(props) => <Text style={styles.amount}>{`$ ${amount}`}</Text>}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15
  }
});