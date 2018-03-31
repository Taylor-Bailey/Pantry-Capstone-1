"use strict";

var $ = require('jquery');
let key = require('./api-key.js');
let printer = require('./print.js');
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
    }).done((data) => { // when ajax call is done, passes data to a function that will...
        let ids = data.map(r => r.id);// takes data and, for each item in the array, gets the id of that item and places it in an array
        if(ids.length !== 0){//if ingredient(s) are found run the recipe details ajax call
            $.ajax({
                url: `https://${key.spoonKey.domain}${key.spoonKey.recipeInfo}`,
                method:'GET',
                data: {ids:ids.join(',')},// takes array of id's and returns a string of id's
                headers: headers
            }).then((data) => {//gets data and when done...
                recipes = data;
                $('#resultsDiv').html("");
                for(let i = 0; i < recipes.length; i++){
                    let recipeObject = recipes[i];
                    // console.log("recipe object: ", recipeObject);
                    printer.printSearchResults(recipeObject);
                }
            });
        }else{// else if no engredients are found, print an error message to the DOM
            printer.printErrorMessage();
        }
        console.log("getIngredients array: ", data);
        return data;
    }).fail((error) => {
        console.log("getIngredients Fail");
        return error;
    });
}

module.exports = {getIngredients};
