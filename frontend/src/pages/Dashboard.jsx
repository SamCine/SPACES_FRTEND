import React from "react";
import { PAGES } from "@/constants/testIds";

/**
 * Dashboard
 * ---------
 * Placeholder screen for the user's bookings / dashboard.
 * Will eventually show active bookings, confirmations and QR check-in codes.
 */
const Dashboard = () => {
  return (
    <section
      data-testid={PAGES.dashboard}
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
        S
      </div>
      <h1 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
        Dashboard
      </h1>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground">
        Your bookings, confirmations and QR check-in codes will live here.
      </p>
      <span className="mt-4 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
        Coming soon
      </span>
    </section>
  );
};

export default Dashboard;
