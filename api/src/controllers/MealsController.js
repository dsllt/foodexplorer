const knex = require('../database/knex')

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

    response.json();
  }

  async delete(request, response){
    const { ids } = request.body;

    ids.map(async id => {
      await knex('meals').where({ id }).delete();
    })

    return response.json();
  }
}

module.exports = MealsController;