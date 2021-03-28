import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import rootReducer from './reducers';

import Dashboard from './components/Dashboard/Dashboard';
import AddExpenseIcon from './components/AddExpenseIcon/AddExpenseIcon';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchAllSubjects } from './saga';
import { NAVIGATION } from './constants/navigation';

const App = () => {
  const Stack = createStackNavigator();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(fetchAllSubjects);

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={NAVIGATION.DASHBOARD}
              component={Dashboard}
              options={{ headerRight: props => <AddExpenseIcon {...props}/> }}
            />
            <Stack.Screen
              name={NAVIGATION.ADD_EXPENSE}
              component={ExpenseForm}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;