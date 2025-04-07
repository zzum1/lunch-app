const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false, // Exclude password from query results by default
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },
});

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.comparePassword = async function (candidatePassword, password) {
    return await bcrypt.compare(candidatePassword, password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;
