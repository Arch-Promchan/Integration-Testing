// index.js
const app = require("./src/app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`hex-to-rgb API listening on http://localhost:${PORT}`);
});
