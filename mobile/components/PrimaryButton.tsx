// components/PrimaryButton.tsx
//
// Prominent call-to-action button (e.g. the checkout button). Wireframe style;
// restyle later. Full-width by default.

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import { WF } from '../constants/wireframe';

type Props = {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function PrimaryButton({ label, onPress, style }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: WF.colors.primary,
    borderRadius: WF.radius.md,
    paddingVertical: WF.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: WF.colors.primaryText,
    fontSize: WF.font.md,
    fontWeight: '600',
  },
});
