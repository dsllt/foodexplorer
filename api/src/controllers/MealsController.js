const knex = require('../database/knex');

class MealsController {
  async create(request, response) {
    const { name, description, price, image, ingredients, category } = request.body;

    const mealId = await knex('meals').insert({
      name, 
      description, 
      price, 
      category,
      image
    });

    ingredients.map(async (ingredient) => {
      await knex('ingredients').insert({
        name: ingredient,
        mealId
      });
    })

    return response.json();
  }

  async delete(request, response){
    const { ids } = request.body;

    ids.map(async id => {
      await knex('meals').where({ id }).delete();
    })

    return response.json();
  }

  async update(request, response){
    const { id, name, description, price, image, ingredients, category } = request.body;
    

    const meal = await knex('meals').where({ id }).first()
      .update({ name, description, price, image, category });

    await knex('ingredients').where({ mealId: id }).del();
    ingredients.map(async (ingredient) => {
      await knex('ingredients').insert({
        name: ingredient,
        mealId: id
      });
    })

    return response.json(meal)
  }

  async show(request, response) {
    const meals = await knex('meals')

    return response.json(meals)
  }
}

module.exports = MealsController;