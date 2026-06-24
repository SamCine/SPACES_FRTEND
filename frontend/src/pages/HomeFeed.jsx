import React, { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import SearchBar from "@/components/home/SearchBar";
import HotelCard from "@/components/home/HotelCard";
import BookingSheet from "@/components/booking/BookingSheet";
import HOTELS from "@/data/hotels";
import { HOME } from "@/constants/testIds";

/**
 * HomeFeed
 * --------
 * The instant booking feed. Owns all UI state for Task 2 (frontend-only):
 *   - query: search text used to filter the feed
 *   - selectedHotel + sheetOpen: drive the slide-up BookingSheet
 */
const HomeFeed = () => {
  const [query, setQuery] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Frontend filtering by area (location) or hotel name.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return HOTELS;
    return HOTELS.filter(
      (h) =>
        h.location.toLowerCase().includes(q) ||
        h.name.toLowerCase().includes(q),
    );
  }, [query]);

  const openBooking = (hotel) => {
    setSelectedHotel(hotel);
    setSheetOpen(true);
  };
  const closeBooking = () => setSheetOpen(false);

  return (
    <div data-testid={HOME.page}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 pb-3 pt-5">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-base font-bold text-primary-foreground">
            S
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Spaces
          </span>
        </div>
        <button
          type="button"
          data-testid={HOME.locationPin}
          className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground transition active:scale-95"
        >
          <MapPin className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          Lagos, NG
        </button>
      </header>

      {/* Sticky search */}
      <SearchBar value={query} onChange={setQuery} />

      {/* Feed */}
      <div className="px-4 pt-4">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Available now
          </h2>
          <span className="text-xs text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "stay" : "stays"}
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-4 pb-4">
            {filtered.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} onBook={openBooking} />
            ))}
          </div>
        ) : (
          <div
            data-testid={HOME.emptyState}
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-16 text-center"
          >
            <MapPin className="h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm font-medium text-foreground">
              No stays in “{query}”
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try another area like Lekki or Ikeja.
            </p>
          </div>
        )}
      </div>

      {/* Slide-up booking sheet */}
      <BookingSheet
        open={sheetOpen}
        hotel={selectedHotel}
        onClose={closeBooking}
      />
    </div>
  );
};

export default HomeFeed;
