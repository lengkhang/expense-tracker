import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export const CATEGORIES = {
  FOOD_AND_DRINK: {
    value: 'Food & Drink',
    icons: <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" />
  },
  GIFT: {
    value: 'Gift',
    icons: <Ionicons name="ios-gift-outline" size={24} color="black" />
  },
  HOUSE: {
    value: 'House',
    icons: <FontAwesome5 name="house-user" size={24} color="black" />
  },
  CAR: {
    value: 'Car',
    icons: <Ionicons name="car-sport-sharp" size={24} color="black" />
  },
  GROCERY: {
    value: 'Grocery',
    icons: <MaterialIcons name="local-grocery-store" size={24} color="black" />
  }
};