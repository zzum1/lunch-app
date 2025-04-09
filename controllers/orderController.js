const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create({
            mealId: req.body.mealId,
        });
        res.status(201).json({
            status: 'Order created successfully',
            data: {
                order,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'Ups, something went wrong',
            message: error.message,
        });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({
            status: 'success',
            results: orders.length,
            data: {
                orders,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}