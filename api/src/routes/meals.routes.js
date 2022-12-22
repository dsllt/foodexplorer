const { Router } = require("express");

const MealsController = require("../controllers/MealsController");

const mealsRoutes = Router();

const mealsController = new MealsController();

mealsRoutes.post('/', mealsController.create);
mealsRoutes.delete('/', mealsController.delete);

module.exports = mealsRoutes;