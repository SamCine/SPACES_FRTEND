// data/hotels.js
// Local mock data for the Home Feed. Frontend-only (no backend yet).
// Prices are nightly rates in Nigerian Naira (NGN).
//
// Locations intentionally include "Ikeja" and "Lekki" so the search filter
// demo (typing those areas) narrows the visible cards.

const HOTELS = [
  {
    id: "eko-signature",
    name: "Eko Signature Suites",
    location: "Victoria Island, Lagos",
    price: 145000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "wheatbaker-ikeja",
    name: "The Wheatbaker",
    location: "Ikeja GRA, Lagos",
    price: 98000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lekki-bay",
    name: "Lekki Bay Residences",
    location: "Lekki Phase 1, Lagos",
    price: 76000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "radisson-ikeja",
    name: "Radisson Blu Ikeja",
    location: "Ikeja, Lagos",
    price: 112000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
];

export default HOTELS;
