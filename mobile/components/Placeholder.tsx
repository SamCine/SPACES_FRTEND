// components/Placeholder.tsx
//
// Generic neutral block used to represent unstyled/empty content in the
// wireframe (a.k.a. a skeleton box). Width/height are configurable.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { DimensionValue, ViewStyle } from 'react-native';
import { WF } from '../constants/wireframe';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  label?: string;
  rounded?: boolean;
  style?: ViewStyle;
};

export default function Placeholder({
  height = 16,
  width = '100%',
  label,
  rounded = true,
  style,
}: Props) {
  return (
    <View
      style={[
        styles.block,
        { height, width, borderRadius: rounded ? WF.radius.sm : 0 },
        style,
      ]}
    >
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: WF.colors.skeleton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { color: WF.colors.textMuted, fontSize: WF.font.sm },
});
