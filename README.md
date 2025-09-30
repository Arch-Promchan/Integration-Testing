# Hex → RGB API (Express)

## What
A small Express REST API that converts hex color strings to RGB. Includes:
- Unit tests for the conversion function (Mocha + Chai)
- Integration tests for the API endpoints (Supertest + Chai)

## API
- GET `/hex-to-rgb?hex=#RRGGBB`  
- POST `/hex-to-rgb` with JSON body `{ "hex": "#RRGGBB" }`

Responses: `200` JSON `{ r: number, g: number, b: number }` or `400` `{ error: "message" }`

## Setup (Windows / Linux / macOS)
1. Clone repo
```bash
git clone <your-repo-url>
cd <repo-folder>
