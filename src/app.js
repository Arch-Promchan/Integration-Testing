// src/app.js
const express = require("express");
const hexToRgb = require("./hexToRgb");

const app = express();
app.use(express.json()); // parse JSON bodies

/**
 * GET /hex-to-rgb?hex=#RRGGBB
 * POST /hex-to-rgb   { "hex": "#RRGGBB" }
 */
app.get("/hex-to-rgb", (req, res) => {
  const hex = req.query.hex;
  if (!hex) {
    return res.status(400).json({ error: "Missing 'hex' query parameter" });
  }
  try {
    const rgb = hexToRgb(hex);
    return res.json(rgb);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

app.post("/hex-to-rgb", (req, res) => {
  const { hex } = req.body || {};
  if (!hex) {
    return res.status(400).json({ error: "Missing 'hex' in JSON body" });
  }
  try {
    const rgb = hexToRgb(hex);
    return res.json(rgb);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = app;
