// screens/BookingsScreen.tsx
//
// Wireframe "Bookings" tab: a scrollable list of placeholder booking cards.
// Tapping a card pushes the BookingDetails screen.

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import ListItemCard from '../components/ListItemCard';
import { WF } from '../constants/wireframe';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const BOOKINGS = [0, 1, 2];

export default function BookingsScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header title="Bookings" subtitle="Your upcoming stays" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {BOOKINGS.map((i) => (
          <ListItemCard
            key={i}
            onPress={() =>
              navigation.navigate('BookingDetails', { bookingId: `booking-${i}` })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: WF.colors.background },
  scrollContent: {
    paddingHorizontal: WF.spacing.md,
    paddingTop: WF.spacing.sm,
    paddingBottom: WF.spacing.xl,
  },
});
