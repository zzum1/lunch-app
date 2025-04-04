const User = require("../models/userModel.js");

exports.register = async (req, res) => {
  try {
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
      status: "fail",
      message: error.message,
    });
  }
};
