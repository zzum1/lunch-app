const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: [true, 'Meal title must be unique'],
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
    },
});

const Meal = mongoose.model('Meal', mealSchema);
module.exports = Meal;