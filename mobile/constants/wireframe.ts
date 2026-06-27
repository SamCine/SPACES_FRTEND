// constants/wireframe.ts
//
// Neutral "wireframe" design tokens. These intentionally use plain grays and
// simple spacing so the skeleton reads clearly while we wait on the designer.
// When the real design system arrives, update THIS file (and per-component
// StyleSheets) to apply the final look — components reference these tokens so
// restyling stays centralized and low-risk.

export const WF = {
  colors: {
    background: '#FFFFFF',
    surface: '#F3F4F6', // light gray placeholder fill
    border: '#E5E7EB',
    text: '#111827',
    textMuted: '#6B7280',
    skeleton: '#E5E7EB', // gray block used for empty placeholders
    primary: '#111827',
    primaryText: '#FFFFFF',
    accent: '#10B981',
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  radius: { sm: 8, md: 12, lg: 16, pill: 999 },
  font: { sm: 13, md: 15, lg: 18, xl: 22 },
} as const;

export type WireframeTokens = typeof WF;
