import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Zap, ShieldCheck, Loader2, MapPin } from "lucide-react";
import { formatNaira } from "@/utils";
import { BOOKING } from "@/constants/testIds";

/**
 * BookingSheet
 * ------------
 * Mobile slide-up bottom sheet for instant booking. Hidden by default; the
 * parent toggles `open`. Manages its own checkout status with useState:
 *   idle -> processing -> success
 *
 * Props:
 *   - open: boolean (controls visibility/animation)
 *   - hotel: selected hotel object (or null)
 *   - onClose(): close the sheet
 */
const SERVICE_FEE_RATE = 0.1;
const TAX_RATE = 0.075;

const BookingSheet = ({ open, hotel, onClose }) => {
  const [status, setStatus] = useState("idle"); // idle | processing | success

  // Reset checkout status whenever the sheet (re)opens for a hotel.
  useEffect(() => {
    if (open) setStatus("idle");
  }, [open, hotel]);

  // Lock background scroll while the sheet is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!hotel) return null;

  const serviceFee = Math.round(hotel.price * SERVICE_FEE_RATE);
  const taxes = Math.round(hotel.price * TAX_RATE);
  const total = hotel.price + serviceFee + taxes;

  const handleConfirm = () => {
    setStatus("processing");
    // Simulate a quick payment round-trip (frontend-only).
    setTimeout(() => setStatus("success"), 1100);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            data-testid={BOOKING.backdrop}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50"
          />

          {/* Sheet */}
          <motion.div
            data-testid={BOOKING.sheet}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-md rounded-t-3xl bg-card shadow-2xl"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3">
              <span className="h-1.5 w-10 rounded-full bg-border" />
            </div>

            {status === "success" ? (
              /* ---------- Success state ---------- */
              <div
                data-testid={BOOKING.successState}
                className="flex flex-col items-center px-6 pb-8 pt-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500"
                >
                  <Check className="h-10 w-10 text-white" strokeWidth={3} />
                </motion.div>
                <h2 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                  Booking Confirmed!
                </h2>
                <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
                  Your room at {hotel.name} is reserved. Show your QR code at
                  the front desk for immediate check-in.
                </p>
                <div className="mt-5 w-full rounded-2xl bg-secondary px-4 py-3 text-left">
                  <p className="text-xs text-muted-foreground">Confirmation</p>
                  <p className="font-mono text-sm font-semibold tracking-wider text-foreground">
                    SPC-{hotel.id.slice(0, 3).toUpperCase()}-
                    {String(total).slice(-4)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  data-testid={BOOKING.doneButton}
                  className="mt-5 w-full rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition active:scale-[0.98]"
                >
                  Done
                </button>
              </div>
            ) : (
              /* ---------- Booking form ---------- */
              <div className="px-5 pb-7 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2
                      data-testid={BOOKING.hotelName}
                      className="truncate text-lg font-bold tracking-tight text-foreground"
                    >
                      {hotel.name}
                    </h2>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{hotel.location}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    data-testid={BOOKING.closeButton}
                    aria-label="Close"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground transition hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Immediate check-in badge (pre-selected) */}
                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-3.5 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Zap className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-emerald-900">
                      Immediate Check-in
                    </p>
                    <p className="text-xs text-emerald-700">
                      Room ready now · skip the front-desk wait
                    </p>
                  </div>
                  <Check className="h-5 w-5 text-emerald-600" strokeWidth={3} />
                </div>

                {/* Price breakdown */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Room rate · 1 night
                    </span>
                    <span className="font-medium text-foreground">
                      {formatNaira(hotel.price)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Service fee</span>
                    <span className="font-medium text-foreground">
                      {formatNaira(serviceFee)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Taxes (7.5%)</span>
                    <span className="font-medium text-foreground">
                      {formatNaira(taxes)}
                    </span>
                  </div>
                  <div className="my-1 border-t border-dashed border-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-foreground">
                      Total
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      {formatNaira(total)}
                    </span>
                  </div>
                </div>

                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Secure checkout · free cancellation for 1 hour
                </p>

                {/* Confirm & Pay */}
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={status === "processing"}
                  data-testid={BOOKING.confirmButton}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-semibold text-primary-foreground transition active:scale-[0.98] disabled:opacity-80"
                >
                  {status === "processing" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing…
                    </>
                  ) : (
                    <>Confirm &amp; Pay · {formatNaira(total)}</>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingSheet;
