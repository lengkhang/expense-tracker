import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import subjectsReducer from './reducers/SubjectsReducer';
import rootReducer from './reducers';

import Dashboard from './components/Dashboard';
import AddExpenseIcon from './components/AddExpenseIcon';
import ExpenseForm from './components/ExpenseForm';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchAllSubjects } from './saga';
import { NAVIGATION } from './constants/navigation';

export default App = () => {
  const Stack = createStackNavigator();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(fetchAllSubjects);

  //TODO: Create routes constants
  //TODO: Change header color to blue

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