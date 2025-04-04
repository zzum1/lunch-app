const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT || 3000;

  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Connected to Database");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

