// components/Header.tsx
//
// Simple placeholder header. Shows a title and optional subtitle (e.g. the
// current location) plus an optional right-side slot. Restyle later.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WF } from '../constants/wireframe';

type Props = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
};

export default function Header({ title, subtitle, right }: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {right ? <View>{right}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WF.spacing.md,
    paddingVertical: WF.spacing.md,
  },
  titleWrap: { flexShrink: 1 },
  title: { fontSize: WF.font.xl, fontWeight: '700', color: WF.colors.text },
  subtitle: {
    marginTop: 2,
    fontSize: WF.font.sm,
    color: WF.colors.textMuted,
  },
});
