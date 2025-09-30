// src/hexToRgb.js
/**
 * Convert a hex color string to an object { r, g, b }.
 * Supports formats: "#RRGGBB", "RRGGBB", "#RGB", "RGB" (case-insensitive)
 * Throws Error("Invalid hex color") for invalid input.
 *
 * @param {string} hex - Hex color string
 * @returns {{r:number,g:number,b:number}} rgb object
 */
function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new Error("Invalid hex color");
  }

  // Remove leading '#'
  let clean = hex.trim().replace(/^#/, "").toLowerCase();

  // Expand shorthand "#abc" -> "aabbcc"
  if (/^[0-9a-f]{3}$/.test(clean)) {
    clean = clean.split("").map(ch => ch + ch).join("");
  }

  if (!/^[0-9a-f]{6}$/.test(clean)) {
    throw new Error("Invalid hex color");
  }

  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);

  return { r, g, b };
}

module.exports = hexToRgb;
