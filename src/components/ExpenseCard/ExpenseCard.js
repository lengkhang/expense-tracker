import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { CATEGORIES } from '../Category/constants';
import Styles from './styles';

export default ExpenseCard = ({ description, category, amount }) => {
  const label = CATEGORIES[category].display;
  const Icon = CATEGORIES[category].icon;

  return (
    <Card>
      <Card.Title
        title={label}
        subtitle={description}
        left={(props) => <Icon {...props} />}
        right={(props) => <Text style={Styles.amount}>{`$ ${amount}`}</Text>}
      />
    </Card>
  );
};