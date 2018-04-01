"use strict";
var $ = require('jquery');
var print = require('./print');

let ingredients = (ingredientArray) => {
    let getIngredient = "";
    for(let i = 0; i < ingredientArray.length; i ++) {
        getIngredient += `<li>${ingredientArray[i].originalString}</li>`;
    }
    return getIngredient;
};

module.exports = {ingredients};