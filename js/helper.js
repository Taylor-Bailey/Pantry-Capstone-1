"use strict";
var $ = require('jquery');
var print = require('./print');


let cookTime = (data) => {
    var minutes = data%60;
    var hours = (data-minutes)/60;
    return hours + "h " + minutes + "s";
};

let ingredients = (ingredientArray) => {
    let getIngredient = "";
    for(let i = 0; i < ingredientArray.length; i ++) {
        getIngredient += `<li>${ingredientArray[i].originalString}</li>`;
    }
    return getIngredient;
};

module.exports = {cookTime, ingredients};