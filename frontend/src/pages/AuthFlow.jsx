import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "@/constants/testIds";

/**
 * AuthFlow
 * --------
 * Placeholder screen for the authentication flow (sign in / sign up).
 * Rendered as a standalone route (no bottom navigation). Real auth UI will be
 * implemented in a later phase.
 */
const AuthFlow = () => {
  return (
    <section
      data-testid={PAGES.authFlow}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
        S
      </div>
      <h1 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
        Auth Flow
      </h1>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground">
        Sign in and sign up screens will live here.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition active:scale-95"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default AuthFlow;
