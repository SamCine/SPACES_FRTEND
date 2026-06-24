import React, { useState } from "react";
import { Star, MapPin, Zap } from "lucide-react";
import { formatNaira } from "@/utils";
import { HOME } from "@/constants/testIds";

/**
 * HotelCard
 * ---------
 * Clean, rounded hotel card for the Home Feed. Shows image, instant/rating
 * badges, name, location, nightly price and a full-width "Instant Book" CTA.
 *
 * Props:
 *   - hotel: { id, name, location, price, rating, image }
 *   - onBook(hotel): called when the Instant Book button is pressed
 */
const HotelCard = ({ hotel, onBook }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <article
      data-testid={`${HOME.hotelCard}-${hotel.id}`}
      className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {!imgError && (
          <img
            src={hotel.image}
            alt={hotel.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        {(imgError || !imgLoaded) && (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary" />
        )}

        {/* Instant badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
          <Zap className="h-3 w-3" aria-hidden="true" />
          Instant
        </span>

        {/* Rating badge */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden="true" />
          {hotel.rating}
        </span>
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold tracking-tight text-foreground">
              {hotel.name}
            </h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{hotel.location}</span>
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-lg font-bold leading-none text-foreground">
              {formatNaira(hotel.price)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">/night</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onBook(hotel)}
          data-testid={`${HOME.instantBookButton}-${hotel.id}`}
          className="mt-4 w-full rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition active:scale-[0.98]"
        >
          Instant Book
        </button>
      </div>
    </article>
  );
};

export default HotelCard;
