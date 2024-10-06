const express = require("express");
const db = require("./config/db");
const app = express();
const port = 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Escrow Backend API is running...");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
