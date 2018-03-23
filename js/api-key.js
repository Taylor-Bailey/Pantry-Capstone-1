"use strict";

console.log("api-keys.js running");

let spoonKey = {
    apiKey: "bqzDK8qj6omshBEa1dX9QWrsvLnKp1ymN8Kjsn3jsOuBpaXscp",
    domain: "spoonacular-recipe-food-nutrition-v1.p.mashape.com",
    ingredients: "/recipes/findByIngredients",
    recipeInfo: "/recipes/informationBulk"
  };

  // When searching for recipes, set the limitLicense parameter to
  // true. That will give you a smaller set of recipes with attribution
  // license. If you then request recipe information for those recipes,
  // you will also get the instructions.

  module.exports = {spoonKey};