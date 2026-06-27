// components/FilterButton.tsx
//
// Mock filter pill used on the Search screen. Purely structural — toggles an
// `active` visual state via props; real filtering logic comes later.

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WF } from '../constants/wireframe';

type Props = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export default function FilterButton({ label, active = false, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.pill, active ? styles.pillActive : styles.pillIdle]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={[styles.label, active ? styles.labelActive : styles.labelIdle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: WF.spacing.md,
    paddingVertical: WF.spacing.sm,
    borderRadius: WF.radius.pill,
    borderWidth: 1,
  },
  pillIdle: { backgroundColor: WF.colors.surface, borderColor: WF.colors.border },
  pillActive: { backgroundColor: WF.colors.primary, borderColor: WF.colors.primary },
  label: { fontSize: WF.font.sm, fontWeight: '500' },
  labelIdle: { color: WF.colors.text },
  labelActive: { color: WF.colors.primaryText },
});
