const knex = require('../database/knex')

class IngredientsController {
  async create(request, response) {
    const { name, image } = request.body;

    await knex('ingredients').insert({name, image});
    return response.json();
  }

  async show(request, response) {
    const { names } = request.body;

    // Get existing ingredients from database ordered by name
    const existingIngredients = await knex('ingredients').orderBy('name')

    // Define an empty array to store the ids of wanted documents
    const ingredientsIds = []

    // Go throw each name and compare with each item in the existing ingredients object.
    // If the name exists in the existing ingredients object, the id is pushed into the ingredientsId array
    names.map(async ingredient => {
      
      for (var key in existingIngredients) {
        var ingredient_name = existingIngredients[key].name

        ingredient = ingredient.toLowerCase();
        ingredient_name = ingredient_name.toLowerCase();

        if(ingredient === ingredient_name) {
          ingredientsIds.push(existingIngredients[key].id)
        }
      }
    })

    // Identify the selected ingredients in the database by verifying the id
    const selectedIngredients = await knex('ingredients').whereIn('id', ingredientsIds)

    return response.json(selectedIngredients);
  }

  async delete(request, response){
    const { ids } = request.body;

    ids.map(async id => {
      await knex('ingredients').where({ id }).delete();
    })

    return response.json();
  }
}

module.exports = IngredientsController;