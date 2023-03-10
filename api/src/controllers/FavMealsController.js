const knex = require('../database/knex')

class FavMealsController {
  async create(request, response) {
    const { meals } = request.body;
    const  userId  = request.user.id;
    
    // Verify id of ordered meals
    const existingMeals = await knex('meals').orderBy('name')
    const mealsIds = []

    meals.map(meal => {
      for (var key in existingMeals) {
        var meal_name = existingMeals[key].name
        meal = meal.toLowerCase();
        meal_name = meal_name.toLowerCase();
        if(meal == meal_name) {
          mealsIds.push(existingMeals[key].id)
        }
      }
    })

    const favorited_meals = mealsIds.map(meal => {
      return {
        userId,
        mealId: meal
      }
    });

    await knex('favMeals').insert(favorited_meals);

    return response.json();
  }

  async show(request, response) {
    const userId = request.user.id;
    const favMeals = await knex('favMeals').where({userId});
    
    return response.json(favMeals)
  }
}

module.exports = FavMealsController;