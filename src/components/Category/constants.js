import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const ICON_COLOR = 'limegreen';

export const CATEGORIES = {
  FOOD_AND_DRINK: {
    display: 'Food & Drink',
    icon: () => (<MaterialCommunityIcons name="food-fork-drink" size={24} color={ICON_COLOR} />)
  },
  GIFT: {
    display: 'Gift',
    icon: () => (<Ionicons name="ios-gift-outline" size={24} color={ICON_COLOR} />)
  },
  HOUSE: {
    display: 'House',
    icon: () => (<FontAwesome5 name="house-user" size={24} color={ICON_COLOR} />)
  },
  CAR: {
    display: 'Car',
    icon: () => (<Ionicons name="car-sport-sharp" size={24} color={ICON_COLOR} />)
  },
  GROCERY: {
    display: 'Grocery',
    icon: () => (<MaterialIcons name="local-grocery-store" size={24} color={ICON_COLOR} />)
  }
};