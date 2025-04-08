const Meal = require('../models/mealModel');

exports.createMeal = async (req, res) => {
    try {
        const meal = await Meal.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            available: req.body.available,
        });
        res.status(201).json({
            status: 'success',
            data: {
                meal,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}

exports.getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.find();
        res.status(200).json({
            status: 'success',
            results: meals.length,
            data: {
                meals,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}

exports.deleteMealById = async (req, res) => {
    const mealId = await Meal.findById(req.params.id);
    if (!mealId) {
        return res.status(404).json({
            status: 'fail',
            message: 'Meal not found',
        });
    }
    try {
        await Meal.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            message: 'Meal deleted successfully',
            data: null,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }

}