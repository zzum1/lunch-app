const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    mealId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;