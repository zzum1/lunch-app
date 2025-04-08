const express = require('express');
const mealController = require('../controllers/mealController');

const router = express.Router();

router.post('/', mealController.createMeal);
router.get('/', mealController.getAllMeals);
router.delete('/:id', mealController.deleteMealById);

module.exports = router;