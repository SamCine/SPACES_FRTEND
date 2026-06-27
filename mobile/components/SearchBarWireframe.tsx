// components/SearchBarWireframe.tsx
//
// Reusable search bar. Two modes:
//   - Static container (default): a non-functional placeholder box that can be
//     tapped (e.g. Home -> opens Search later). Pass `onPress`.
//   - Editable input: pass `editable`, `value`, and `onChangeText` to render a
//     real <TextInput> (used on the Search screen).

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WF } from '../constants/wireframe';

type Props = {
  placeholder?: string;
  editable?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
};

export default function SearchBarWireframe({
  placeholder = 'Search…',
  editable = false,
  value,
  onChangeText,
  onPress,
}: Props) {
  if (editable) {
    return (
      <View style={styles.bar}>
        <Ionicons name="search-outline" size={18} color={WF.colors.textMuted} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={WF.colors.textMuted}
          value={value}
          onChangeText={onChangeText}
          returnKeyType="search"
        />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.bar}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={!onPress}
    >
      <Ionicons name="search-outline" size={18} color={WF.colors.textMuted} />
      <Text style={styles.placeholderText}>{placeholder}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WF.spacing.sm,
    backgroundColor: WF.colors.surface,
    borderRadius: WF.radius.md,
    paddingHorizontal: WF.spacing.md,
    height: 46,
  },
  input: { flex: 1, fontSize: WF.font.md, color: WF.colors.text, padding: 0 },
  placeholderText: { fontSize: WF.font.md, color: WF.colors.textMuted },
});
