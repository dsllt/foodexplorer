const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class MealsController {
  async create(request, response) {
    const { name, description, price, image, ingredients } = request.body;

    const mealId = await  knex('meals').insert({
      name, 
      description, 
      price, 
      image
    });

    // Verify if ingredients exist in the ingredient table
    const existingIngredients = await knex('ingredients').orderBy('name')
    const ingredientsIds = []

    ingredients.map(ingredient => {
      for (var key in existingIngredients) {
        var ingredient_name = existingIngredients[key].name
        ingredient = ingredient.toLowerCase();
        ingredient_name = ingredient_name.toLowerCase();
        if(ingredient == ingredient_name) {
          ingredientsIds.push(existingIngredients[key].id)
        }
      }
    })

    const mealIngredients = ingredientsIds.map(ingredientId => {
      return {
        mealId,
        ingredientId: ingredientId
      }
    });

    await knex('mealIngredient').insert(mealIngredients);

    return response.json();
  }

  async delete(request, response){
    const { id } = request.params;

    ids.map(async id => {
      await knex('meals').where({ id }).delete();
    })

    return response.json();
  }

  async update(request, response){
    const name = request.body.name;
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const meal = await knex('meals').where({ name }).first();
    
    if(!meal){
      throw new AppError('Esta refeição ainda não foi cadastrada.', 401);
    }

    if(meal.image){
      await diskStorage.deleteFile(meal.image);
    }

    const filename = await diskStorage.saveFile(imageFilename);
    meal.image = filename;

      await knex('meals').update(meal).where({ name });

    response.json({})
  }

  async show(request, response) {
    const { id } = request.params;
    const meal = await knex('meals')
    .where({ id }).first()

    return response.json(meal)
  }
}

module.exports = MealsController;