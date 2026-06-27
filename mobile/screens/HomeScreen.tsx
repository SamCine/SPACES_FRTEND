// screens/HomeScreen.tsx
//
// Wireframe home feed: header placeholder, a (tappable) search bar wireframe,
// and a scrollable vertical list of placeholder cards. Tapping a card pushes
// the BookingDetails screen.

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import SearchBarWireframe from '../components/SearchBarWireframe';
import ListItemCard from '../components/ListItemCard';
import { WF } from '../constants/wireframe';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

// Mock list — just indices to render N placeholder cards.
const PLACEHOLDER_ITEMS = [0, 1, 2, 3, 4];

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header placeholder */}
      <Header title="Spaces" subtitle="Lagos, NG" />

      {/* Search bar wireframe container */}
      <View style={styles.searchWrap}>
        <SearchBarWireframe placeholder="Search area…" />
      </View>

      {/* Scrollable vertical list container */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Available now</Text>
        {PLACEHOLDER_ITEMS.map((i) => (
          <ListItemCard
            key={i}
            onPress={() =>
              navigation.navigate('BookingDetails', { bookingId: `room-${i}` })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: WF.colors.background },
  searchWrap: {
    paddingHorizontal: WF.spacing.md,
    paddingBottom: WF.spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: WF.spacing.md,
    paddingTop: WF.spacing.sm,
    paddingBottom: WF.spacing.xl,
  },
  sectionTitle: {
    fontSize: WF.font.md,
    fontWeight: '600',
    color: WF.colors.text,
    marginBottom: WF.spacing.md,
  },
});
