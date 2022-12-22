const { Router } = require("express");

const FavMealsController = require("../controllers/FavMealsController");

const favMealsRoutes = Router();

const favMealsController = new FavMealsController();

favMealsRoutes.post('/:userId', favMealsController.create);

module.exports = favMealsRoutes;