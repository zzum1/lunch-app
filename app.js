const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", userRouter);

module.exports = app;
