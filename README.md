# Hex → RGB API

Simple REST API with Express that converts hex colors to RGB.
Includes unit tests (Mocha + Chai) and integration tests (Supertest).

# Run
npm install

npm start

# Test
npm test

# API

GET /hex-to-rgb?hex=#ff0000 → { "r": 255, "g": 0, "b": 0 }

POST /hex-to-rgb with { "hex": "#00ff00" } → { "r": 0, "g": 255, "b": 0 }
