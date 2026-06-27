// screens/SearchScreen.tsx
//
// Wireframe search screen: an editable search input and a row of mock filter
// buttons (local toggle state only) above a placeholder results area.

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import SearchBarWireframe from '../components/SearchBarWireframe';
import FilterButton from '../components/FilterButton';
import Placeholder from '../components/Placeholder';
import { WF } from '../constants/wireframe';

// Mock filters — visual only for now.
const FILTERS = ['Price', 'Rating', 'Area', 'Instant'];
const RESULT_ROWS = [0, 1, 2, 3, 4, 5];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header title="Search" />

      {/* Search input area */}
      <View style={styles.searchWrap}>
        <SearchBarWireframe
          editable
          value={query}
          onChangeText={setQuery}
          placeholder="Search hotels or areas…"
        />
      </View>

      {/* Mock filter buttons */}
      <View style={styles.filtersSection}>
        <Text style={styles.label}>Filters</Text>
        <View style={styles.filterRow}>
          {FILTERS.map((f) => (
            <FilterButton
              key={f}
              label={f}
              active={activeFilter === f}
              onPress={() => setActiveFilter(activeFilter === f ? null : f)}
            />
          ))}
        </View>
      </View>

      {/* Placeholder results */}
      <ScrollView
        contentContainerStyle={styles.results}
        showsVerticalScrollIndicator={false}
      >
        {RESULT_ROWS.map((i) => (
          <Placeholder key={i} height={64} style={styles.resultRow} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: WF.colors.background },
  searchWrap: { paddingHorizontal: WF.spacing.md },
  filtersSection: {
    paddingHorizontal: WF.spacing.md,
    paddingTop: WF.spacing.md,
  },
  label: {
    fontSize: WF.font.sm,
    fontWeight: '600',
    color: WF.colors.textMuted,
    marginBottom: WF.spacing.sm,
  },
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: WF.spacing.sm },
  results: {
    padding: WF.spacing.md,
    paddingBottom: WF.spacing.xl,
  },
  resultRow: { marginBottom: WF.spacing.md },
});
