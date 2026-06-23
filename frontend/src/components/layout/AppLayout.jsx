import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import { LAYOUT } from "@/constants/testIds";

/**
 * AppLayout
 * ---------
 * Global mobile-first layout shell. Centers the app within a phone-sized
 * column, renders the active route via <Outlet />, and pins the placeholder
 * bottom navigation bar. Bottom padding leaves room for the fixed nav.
 */
const AppLayout = () => {
  return (
    <div
      data-testid={LAYOUT.shell}
      className="relative mx-auto flex min-h-screen w-full max-w-md flex-col bg-background"
    >
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
