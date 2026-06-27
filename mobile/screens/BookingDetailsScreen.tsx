// screens/BookingDetailsScreen.tsx
//
// Wireframe booking detail screen. Structural blocks only:
//   - Hotel name block
//   - Date selectors (check-in / check-out)
//   - Pricing breakdown rows
//   - A prominent, pinned checkout button

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import SectionBlock from '../components/SectionBlock';
import Placeholder from '../components/Placeholder';
import PrimaryButton from '../components/PrimaryButton';
import { WF } from '../constants/wireframe';
import type { RootStackParamList } from '../navigation/types';

type DetailsRoute = RouteProp<RootStackParamList, 'BookingDetails'>;

// Mock pricing rows (label only — values are placeholders).
const PRICE_ROWS = ['Room rate', 'Service fee', 'Taxes', 'Total'];

export default function BookingDetailsScreen() {
  const route = useRoute<DetailsRoute>();
  const bookingId = route.params?.bookingId;

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Optional debug line so we can see the passed param in the wireframe */}
        {bookingId ? (
          <Text style={styles.idHint}>Ref: {bookingId}</Text>
        ) : null}

        {/* Hotel name block */}
        <SectionBlock title="Hotel">
          <Placeholder height={22} width="70%" />
          <Placeholder height={14} width="45%" />
        </SectionBlock>

        {/* Date selectors */}
        <SectionBlock title="Dates">
          <View style={styles.dateRow}>
            <View style={styles.dateCol}>
              <Text style={styles.dateLabel}>Check-in</Text>
              <Placeholder height={44} />
            </View>
            <View style={styles.dateCol}>
              <Text style={styles.dateLabel}>Check-out</Text>
              <Placeholder height={44} />
            </View>
          </View>
        </SectionBlock>

        {/* Pricing breakdown */}
        <SectionBlock title="Pricing breakdown">
          {PRICE_ROWS.map((label, idx) => (
            <View
              key={label}
              style={[
                styles.priceRow,
                idx === PRICE_ROWS.length - 1 && styles.priceRowTotal,
              ]}
            >
              <Text
                style={[
                  styles.priceLabel,
                  idx === PRICE_ROWS.length - 1 && styles.priceLabelTotal,
                ]}
              >
                {label}
              </Text>
              <Placeholder height={16} width={72} />
            </View>
          ))}
        </SectionBlock>
      </ScrollView>

      {/* Prominent checkout button (pinned to the bottom) */}
      <View style={styles.footer}>
        <PrimaryButton label="Proceed to Checkout" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: WF.colors.background },
  scrollContent: { padding: WF.spacing.md, paddingBottom: WF.spacing.xl },
  idHint: {
    fontSize: WF.font.sm,
    color: WF.colors.textMuted,
    marginBottom: WF.spacing.md,
  },
  dateRow: { flexDirection: 'row', gap: WF.spacing.md },
  dateCol: { flex: 1, gap: WF.spacing.xs },
  dateLabel: { fontSize: WF.font.sm, color: WF.colors.textMuted },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceRowTotal: {
    borderTopWidth: 1,
    borderTopColor: WF.colors.border,
    paddingTop: WF.spacing.sm,
    marginTop: WF.spacing.xs,
  },
  priceLabel: { fontSize: WF.font.md, color: WF.colors.textMuted },
  priceLabelTotal: { color: WF.colors.text, fontWeight: '700' },
  footer: {
    padding: WF.spacing.md,
    borderTopWidth: 1,
    borderTopColor: WF.colors.border,
  },
});
