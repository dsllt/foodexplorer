# API foodExplorer
This API was developed in order to host user, restaurant and orders data. <br>

## Project's Architecture
/src/ <br>

- /server.js -> Inicializes the project
- /configs/
- /controllers/ -> Responsible for processing requests and holding business rules
  - /UsersController.js
  - /SessionsController.js
  - /MealsController.js
  - /IngredientsController.js
  - /ImagesController.js
  - /FavMealssController.js
  - /OrdersController.js
- /middlewares/
- /providers/
- /routes/ -> Especifies all routes used by the project
  - /index.js -> Index all routes used in the project 
  - /user.routes.js -> Indicate user routes
  - /meals.routes.js -> Indicate meals routes
  - /ingredients.routes.js -> Indicate ingredients routes
  - /favMeals.routes.js -> Indicate favorite meals routes
  - /images.routes.js -> Indicate images routes
  - /sessions.routes.js -> Indicate sessions routes
  - /orders.routes.js -> Indicate orders routes
- /utils/ -> Responsible for handling exceptions

<br>

/tmp/ <br>

- /uploads/ -> Stores all uploaded images

<br>

# Installing
```bash
# Install Node.js

# Clone the project 

# Download project dependencies
  npm install

# Run migrations
  npm run migrate

# Run the project in development mode
  npm run dev
```

## 🚀 Technologies
During the development of the project, the following technologies were used:
* JavaScript
* Node.js

<br>

## 📚 Packages and Libraries
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [cors](https://www.npmjs.com/package/cors)
* [express](https://www.npmjs.com/package/express)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [knex](https://knexjs.org/)
* [multer](https://www.npmjs.com/package/multer)
* [sqlite](https://www.npmjs.com/package/sqlite)


<br>

## 📚 Author
<a href="https://www.linkedin.com/in/dayanesallet/" target="_blank"><img align="left" src="https://raw.githubusercontent.com/yushi1007/yushi1007/main/images/linkedin.svg" alt="" width="21px"/></a>