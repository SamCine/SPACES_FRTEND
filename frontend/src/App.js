import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";
import HomeFeed from "@/pages/HomeFeed";
import Dashboard from "@/pages/Dashboard";
import AuthFlow from "@/pages/AuthFlow";

/**
 * App
 * ---
 * Root component + route configuration for "Spaces".
 *
 * Routing structure:
 *   - AppLayout wraps the primary in-app screens and renders the mobile
 *     bottom navigation bar.
 *       /            -> HomeFeed   (instant booking feed)
 *       /dashboard   -> Dashboard  (bookings, confirmations, QR check-in)
 *   - The auth flow renders standalone (no bottom nav):
 *       /auth        -> AuthFlow   (sign in / sign up)
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/auth" element={<AuthFlow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
