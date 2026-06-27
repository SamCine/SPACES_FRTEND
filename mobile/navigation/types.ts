// navigation/types.ts
//
// Centralized navigation param lists for fully type-safe routing.
// Update these whenever you add a screen or pass route params.

import type { NavigatorScreenParams } from '@react-navigation/native';

// Screens inside the bottom tab navigator.
export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Bookings: undefined;
};

// Screens inside the root stack navigator (wraps the tabs + detail screens).
export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  BookingDetails: { bookingId?: string } | undefined;
};

// Make `useNavigation()` / linking globally aware of our routes.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
