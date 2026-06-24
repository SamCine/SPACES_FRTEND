import React from "react";
import { Search, X } from "lucide-react";
import { HOME } from "@/constants/testIds";

/**
 * SearchBar
 * ---------
 * Prominent, sticky search input that sits just below the header. Controlled
 * via props so the parent (HomeFeed) owns the query state and filtering.
 *
 * Props:
 *   - value: current query string
 *   - onChange(next): update handler
 */
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="sticky top-0 z-30 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="text"
          inputMode="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          data-testid={HOME.searchInput}
          placeholder="Search area — try ‘Lekki’ or ‘Ikeja’"
          className="w-full rounded-2xl border border-transparent bg-secondary py-3 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/15"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            data-testid={HOME.searchClear}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
