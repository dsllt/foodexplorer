const { Router } = require("express");

const IngredientController = require("../controllers/IngredientsController");

const ingredientsRoutes = Router();

const ingredientController = new IngredientController();

ingredientsRoutes.post('/', ingredientController.create);
ingredientsRoutes.get('/', ingredientController.show);
ingredientsRoutes.delete('/', ingredientController.delete);

module.exports = ingredientsRoutes;