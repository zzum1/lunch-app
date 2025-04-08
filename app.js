const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes.js");
const mealRouter = require("./routes/mealRoutes.js");

const app = express();

// Add logging middleware
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to: ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/meals", mealRouter);

module.exports = app;
