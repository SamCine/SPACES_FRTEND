import React from "react";
import { PAGES } from "@/constants/testIds";

/**
 * HomeFeed
 * --------
 * Placeholder screen for the instant booking feed.
 * The real implementation (nearby rooms feed, instant book cards) will be
 * built in a later phase. This is intentionally minimal scaffolding.
 */
const HomeFeed = () => {
  return (
    <section
      data-testid={PAGES.homeFeed}
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
        S
      </div>
      <h1 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
        Home Feed
      </h1>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground">
        The instant booking feed will live here. Nearby rooms, ready to book in
        a tap.
      </p>
      <span className="mt-4 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
        Coming soon
      </span>
    </section>
  );
};

export default HomeFeed;
