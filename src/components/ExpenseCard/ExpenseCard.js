import * as React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import { CATEGORIES } from '../Category/constants';
import Styles from './styles';

const ExpenseCard = ({ description, category, amount }) => {
  const label = CATEGORIES[category].display;
  const Icon = CATEGORIES[category].icon;

  return (
    <Card>
      <Card.Title
        title={label}
        subtitle={description}
        left={(props) => <Icon {...props} />}
        right={(props) => <Text {...props} style={Styles.amount}>{`$ ${amount}`}</Text>}
      />
    </Card>
  );
};

export default ExpenseCard;