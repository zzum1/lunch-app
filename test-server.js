// test-server.js
const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/test", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Received!", data: req.body });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
