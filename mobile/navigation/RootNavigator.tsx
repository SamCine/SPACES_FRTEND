// navigation/RootNavigator.tsx
//
// Root navigation container. A native stack wraps the bottom tabs so we can
// push detail screens (e.g. BookingDetails) on top of the tab bar.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import BookingDetailsScreen from '../screens/BookingDetailsScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookingDetails"
          component={BookingDetailsScreen}
          options={{ title: 'Booking Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
