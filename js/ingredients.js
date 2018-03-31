"use strict";

var $ = require('jquery');
let key = require('./api-key');
let printer = require('./print');
let recipes = [];
const headers = {
    "X-Mashape-Key": `${key.spoonKey.apiKey}`,
    Accept: "application/json"
};

function getIngredients(ingredients) { //passes ingredients in search field into function
    return $.ajax({ 
      url: `https://${key.spoonKey.domain}${key.spoonKey.ingredients}?fillIngredients=false&ingredients=${ingredients}&limitLicense=false&number=10&ranking=1`,
      method: 'GET',
      headers: headers
    }).then((data) => { // when ajax call is done, passes data to a function that will...
        // let ids = data.map(r => r.id);// takes data and, for each item in the array, gets the id of that item and places it in an array
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

module.exports = {getIngredients, getRecipeInfo};
