import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants/navigation';

const AddExpenseIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NAVIGATION.ADD_EXPENSE)}
      style={{ marginRight: 10 }}>
      <Ionicons name="add" size={32} color="#101010" />
    </TouchableOpacity>
  );
};

export default AddExpenseIcon;