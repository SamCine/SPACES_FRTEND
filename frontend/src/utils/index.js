// utils/ — small, framework-agnostic helper functions shared across the app.
// Keep pure functions here (formatting, calculations, guards). UI-specific
// helpers belong with their components; class-name merging lives in lib/utils.
//
// This file is intentionally light for the foundational scaffold and will grow
// as features (booking, pricing, dates) are implemented.

/**
 * Format a number as a currency string.
 * @param {number} amount
 * @param {string} [currency="USD"]
 * @param {string} [locale="en-US"]
 * @returns {string}
 */
export function formatCurrency(amount, currency = "USD", locale = "en-US") {
  if (typeof amount !== "number" || Number.isNaN(amount)) return "";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Clamp a number between a minimum and maximum.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Format an amount as Nigerian Naira, e.g. 145000 -> "\u20a6145,000".
 * @param {number} amount
 * @returns {string}
 */
export function formatNaira(amount) {
  if (typeof amount !== "number" || Number.isNaN(amount)) return "";
  return `\u20a6${amount.toLocaleString("en-NG")}`;
}
