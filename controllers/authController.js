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
    if (!userName || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide username and password!",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
