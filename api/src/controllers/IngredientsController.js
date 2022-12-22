const knex = require('../database/knex')

class IngredientsController {
  async create(request, response) {
    const { name, image } = request.body;

    await knex('ingredients').insert({name, image});
    response.json();
  }

  async show(request, response) {
    const { names } = request.body;

    const ingredients = await knex('ingredients').orderBy('name');


    const existingIngredients = await knex('ingredients').orderBy('name')
    const ingredientsIds = []

    names.map(async ingredient => {
      for (var key in existingIngredients) {
        var ingredient_name = existingIngredients[key].name
        ingredient = ingredient.toLowerCase();
        ingredient_name = ingredient_name.toLowerCase();
        if(ingredient === ingredient_name) {
          ingredientsIds.push(existingIngredients[key].id)
        } else {
          var new_ing = await knex('ingredients').insert({name: ingredient});
          console.log(new_ing)
        }
      }
    })

    console.log(ingredientsIds);
    response.json(ingredients);
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