"use strict";

var $ = require('jquery');
let key = require('./api-key');
let printer = require('./print');
let users = require('./users.js');
let recipes = [];
const headers = {
    "X-Mashape-Key": `${key.spoonKey.apiKey}`,
    Accept: "application/json"
};

function getIngredients(ingredients) { //passes ingredients in search field into function
    return $.ajax({ 
      url: `https://${key.spoonKey.domain}${key.spoonKey.ingredients}?fillIngredients=false&ingredients=${ingredients}&limitLicense=false&number=20&ranking=1`,
      method: 'GET',
      headers: headers
    }).then((data) => { // when ajax call is done, passes data to a function that will...
        recipes = data;
        $('#resultsDiv').html("");
        for(let i = 0; i < recipes.length; i++){
            let recipeObject = recipes[i];
            if(recipeObject.length !== 0){//if ingredient(s) are found run the recipe details ajax call
                printer.printSearchResults(recipeObject);
            }else{// else if no engredients are found, print an error message to the DOM
            printer.printErrorMessage();
            }
        }
    }).fail((error) => {
        console.log("getIngredients Fail");
        return error;
    });
}

function getRecipeInfo (recipeId) {
    return $.ajax({
        url: `https://${key.spoonKey.domain}/recipes/${recipeId}/information`,
        method:'GET',
        headers: headers
    }).then((data) => {
        recipes = data;
        return recipes;
    });
}

function getUserRecipes (recipeArray) {
    return $.ajax({
        url: `https://${key.spoonKey.domain}/recipes/informationBulk?ids=${recipeArray}`,
        method:'GET',
        headers: headers
    }).then((data) => {
        console.log("Recipes: ", data);
        recipes = data;
        $('#resultsDiv').html("");
        for(let i = 0; i < recipes.length; i++){
            let recipeObject = recipes[i];
            if(recipeObject.length !== 0){
                printer.printSavedResults(recipeObject);
                // console.log("Recipe Objects: ", recipeObject);
            }else{
            printer.printErrorMessage();
            }
        }
    }).fail((error) => {
        console.log("getIngredients Fail");
        return error;
    });
}

module.exports = {getIngredients, getRecipeInfo, getUserRecipes};

//promise.all pass array runn through loop
