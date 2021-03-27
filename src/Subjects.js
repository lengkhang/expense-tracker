import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { addSubject } from './actions/SubjectsActions';

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
 
export default function Subjects() {
  const navigation = useNavigation();
  const { subjects } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Select Subjects Below!</Text>

      {
        subjects.all_subjects.map((subject, index) => (
          <Button
            key={ subject }
            title={ `Add ${ subject }` }
            onPress={() =>
              dispatch(addSubject(index))
            }
          />
        ))
      }

      <Button
        title="Back to home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});