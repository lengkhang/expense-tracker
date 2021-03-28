import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../components/Dashboard/Dashboard';
import createTestStore from './utils/createTestStore';

describe('Render dashboard', () => {
  function renderScreen(store) {
    const Stack = createStackNavigator();

    const renderer = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );

    return renderer;
  }

  beforeAll(() => {
    Date.now = jest.fn(() => Date.parse('2021-02-14'));
  });

  describe('When no expenses', () => {
    let store;

    beforeAll(() => {
      store = createTestStore();
    });

    it('Show 0 expenses', () => {
      const { getByText } = renderScreen(store);

      getByText('$ 0');
      getByText('Total expenses this month');
    });
  });

  describe('When has multiple expenses', () => {
    let store;

    beforeAll(() => {
      store = createTestStore({
        expenses: {
          groupByDate: {
            '1614441600000': [
              {'amount': 250, 'category': 'CAR', 'date': '2021-02-28T11:47:41.000Z', 'description': 'Car'},
              {'amount': 100, 'category': 'FOOD_AND_DRINK', 'date': '2021-02-25T11:47:41.000Z', 'description': 'something'}
            ]
          },
          keysSortByDateDescending: ['1614441600000'],
          totalExpensesThisMonth: '350'
        }
      });
    });

    it('Show the sum all expenses', () => {
      const { getByText } = renderScreen(store);

      getByText('$ 350');
      getByText('Total expenses this month');
    });
  });
});