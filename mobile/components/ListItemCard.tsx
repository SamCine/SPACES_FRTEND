// components/ListItemCard.tsx
//
// Placeholder card for a list row (used in the Home feed and Bookings list).
// Structure only: image block, two text-line placeholders, and a small action
// placeholder. Tapping triggers `onPress` (e.g. navigate to details).

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Placeholder from './Placeholder';
import { WF } from '../constants/wireframe';

type Props = {
  onPress?: () => void;
};

export default function ListItemCard({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={!onPress}
    >
      {/* Image block */}
      <Placeholder height={140} rounded style={styles.image} />

      {/* Text lines */}
      <View style={styles.body}>
        <Placeholder height={16} width="65%" />
        <Placeholder height={12} width="40%" style={styles.lineGap} />

        {/* Footer row: price placeholder + action placeholder */}
        <View style={styles.footer}>
          <Placeholder height={16} width={80} />
          <Placeholder height={32} width={96} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: WF.colors.background,
    borderWidth: 1,
    borderColor: WF.colors.border,
    borderRadius: WF.radius.lg,
    overflow: 'hidden',
    marginBottom: WF.spacing.md,
  },
  image: { borderRadius: 0 },
  body: { padding: WF.spacing.md },
  lineGap: { marginTop: WF.spacing.sm },
  footer: {
    marginTop: WF.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
