"use strict";

let ingredients = require('./ingredients');
let $ = require('jquery');
let time = require('./helper');

let printLoginPage = () => {
    $(document.body).html(
        `<div class="bg">
            <div class="row justify-content-center">
                <h1 id="pantry">Pantry</h1>
                <img src="img/veg-wht.png" id="loginIcon" alt="onion icon">
                <button id="loginButton" type="button" >Log In</button> 
            </div>  
        </div>`);
};

let printSearchResults = (result) => {
    $('#resultsDiv').html("");
    console.log("results should be empty");
    ingredients.getIngredients().then((food) => {
        for(let i = 0; i < food.length; i ++){
            console.log("see what shows up", food[i]);
            $('#resultsDiv').html( 
            `<div id="recipeDiv" class ="row align-items-start">    
                <img src="${result[i].image}" alt="Image of ${result[i].title}" class="recipeOverviewImage col-4">
                <div class ="recipeInfo col-8">
                    <h2 id="" class="recipeOverviewName row justify-content-start">${result[i].title}</h2>
                    <div class ="row justify-content-end">
                        <div class="col-3">
                            <img src="img/time-blk.png" alt="clock icon" class="overviewIcon"><p>${time.cookTime(result[i].cookingMinutes)}
                        </div>
                        <div class="col-3">
                            <img src="img/fav-red.png" alt="favorite icon" class="overviewIcon">
                        </div>
                    </div>
                </div>
            </div>`);
        }
    });
    console.log("results printed to DOM");
};

module.exports = {printSearchResults, printLoginPage};