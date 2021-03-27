import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default AddExpenseIcon = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Add expense')}
      style={{ marginRight: 10 }}>
      <Ionicons name='add' size={32} color='#101010' />
    </TouchableOpacity>
  )
}
