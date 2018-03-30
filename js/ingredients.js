"use strict";

var $ = require('jquery');
let key = require('./api-key.js');
let recipes = [];
const headers = {
    "X-Mashape-Key": `${key.spoonKey.apiKey}`,
    Accept: "application/json"
};

function getIngredients(ingredients) {
    return $.ajax({
      url: `https://${key.spoonKey.domain}${key.spoonKey.ingredients}?fillIngredients=false&ingredients=${ingredients}&limitLicense=false&number=10&ranking=1`,
      method: 'GET',
      headers: headers
    }).done((data) => {
        let ids = data.map(r => r.id);
        if(ids.length){
            $.ajax({
                url: `https://${key.spoonKey.domain}${key.spoonKey.recipeInfo}`,
                method:'GET',
                data: {ids:ids.join(',')},
                headers: headers
            }).done((data) => {
                recipes = data;
                for(let i = 0; i < recipes.length; i++){
                    let recipeObject = recipes[i];
                    console.log("recipe object: ", recipeObject);
                }
            });
        }
        console.log("getIngredients array: ", data);
        return data;
    }).fail((error) => {
        console.log("getIngredients Fail");
        return error;
    });
}

module.exports = {getIngredients};
