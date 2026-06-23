import React from "react";
import { NavLink } from "react-router-dom";
import { Home, CalendarCheck, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOTTOM_NAV } from "@/constants/testIds";

/**
 * BottomNav
 * ---------
 * Placeholder mobile bottom navigation bar. Fixed to the bottom of the
 * viewport, respects the device safe-area inset, and is constrained to the
 * mobile shell width. Items use NavLink for active-state styling.
 */
const NAV_ITEMS = [
  { to: "/", label: "Home", icon: Home, testId: BOTTOM_NAV.home, end: true },
  {
    to: "/dashboard",
    label: "Bookings",
    icon: CalendarCheck,
    testId: BOTTOM_NAV.bookings,
  },
  { to: "/auth", label: "Account", icon: User, testId: BOTTOM_NAV.account },
];

const BottomNav = () => {
  return (
    <nav
      data-testid={BOTTOM_NAV.container}
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md border-t border-border bg-background/95 backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="flex items-stretch justify-around">
        {NAV_ITEMS.map(({ to, label, icon: Icon, testId, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              data-testid={testId}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
