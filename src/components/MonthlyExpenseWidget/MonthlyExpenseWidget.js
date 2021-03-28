import * as React from 'react';
import { Card } from 'react-native-paper';
import Styles from './styles';

const MonthlyExpenseWidget = ({ caption, amount }) => {
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

export default MonthlyExpenseWidget;