"use strict";
console.log("ingredients hello!");

var $ = require('jquery');
let key = require('./api-key.js');
let ingredients = [];
const headers = {
    "X-Mashape-Key": `${key.spoonKey.apiKey}`,
    Accept: "application/json"
};



function getIngredients() {
    console.log("get Ingredients Running");
    return $.ajax({
      url: `https://${key.spoonKey.domain}${key.spoonKey.ingredients}?fillIngredients=false&ingredients=${ingredients}&limitLicense=false&number=10&ranking=1`,
      method: 'GET',
      headers: headers
    }).done((data) => {
        console.log("getIngredients data: ", data);
        return data;
    }).fail((error) => {
        console.log("getIngredients Fail");
        return error;
    });
   }

   getIngredients();

   module.exports = {getIngredients};

// GET https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients

// curl curl --get --include 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1' \
//   -H 'Accept: application/json'