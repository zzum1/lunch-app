const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/", authController.verifyToken, orderController.createOrder);
router.get("/", orderController.getAllOrders);

module.exports = router;