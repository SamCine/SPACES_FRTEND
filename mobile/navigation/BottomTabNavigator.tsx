// navigation/BottomTabNavigator.tsx
//
// Bottom Tab Navigator with the three primary tabs: Home, Search, Bookings.
// Header is hidden here because the root stack / screens render their own.

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import BookingsScreen from '../screens/BookingsScreen';
import { WF } from '../constants/wireframe';
import type { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

// Map each tab to an Ionicons glyph (outline by default).
const TAB_ICONS: Record<keyof TabParamList, keyof typeof Ionicons.glyphMap> = {
  Home: 'home-outline',
  Search: 'search-outline',
  Bookings: 'calendar-outline',
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: WF.colors.primary,
        tabBarInactiveTintColor: WF.colors.textMuted,
        tabBarStyle: { borderTopColor: WF.colors.border },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
    </Tab.Navigator>
  );
}
