// components/SectionBlock.tsx
//
// Labeled structural block used to group content on detail screens. Renders a
// small section title and a bordered container holding `children` (or a default
// placeholder when empty).

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Placeholder from './Placeholder';
import { WF } from '../constants/wireframe';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function SectionBlock({ title, children }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.box}>
        {children ?? <Placeholder height={20} width="60%" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: WF.spacing.lg },
  title: {
    fontSize: WF.font.sm,
    fontWeight: '600',
    color: WF.colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: WF.spacing.sm,
  },
  box: {
    borderWidth: 1,
    borderColor: WF.colors.border,
    borderRadius: WF.radius.md,
    padding: WF.spacing.md,
    gap: WF.spacing.sm,
  },
});
