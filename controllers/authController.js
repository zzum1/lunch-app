const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.userName });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const newUser = await User.create({
      userName: req.body.userName,
      password: req.body.password,
      role: req.body.role,
    });
    res.status(201).json({
      status: "User was created successfully",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "User already exists",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    // kazkodel neveikia man sitas
    if (!userName || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide username and password!",
      });
    }
    // Check if user exists and password is correct
    const user = await User.findOne({ userName }).select("+password");
    if (!user) {
      throw new Error("User not found!!!");
    }
    const isPasswordMatch = await user.comparePassword(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid password");
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    // Send response
    res.status(200).json({
      status: "Login successful",
      token,
      data: {
        user: {
          id: user._id,
          userName: user.userName,
          role: user.role,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
};
