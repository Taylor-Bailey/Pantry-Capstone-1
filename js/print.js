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
        </div>
        <script src="dist/app.js"></script>`);
};

let printSearchPage = () => {
    $(document.body).html(
        `<div class="topTab">
        <div class="row align-items-start">
            <div id="searchTabActive" class="tab col">Search</div>
            <div id="recipeTabInactive" class="tab col">Recipes</div>
        </div>
    </div>
    <div class="container">
        <div class="iconDiv row justify-content-center text-center">
            <div class="col-3"><img src="img/spice-blk.png" alt="salt shaker icon" class="searchIcon" id="spiceIcon"></div>
            <div class="col-3"><img src="img/veg-blk.png" alt="onion icon" id="vegIcon" class="searchIcon"></div>
            <div class="col-3"><img src="img/meat-blk.png" alt="thigh meat icon" id="meatIcon" class="searchIcon"></div>
        </div>
    <div id ="searchDiv" class="row justify-content-center">
        <input id="searchInput" type=text placeholder="search by ingredients (salt,onion,chicken)" class="col-10"></input>
        <button id="searchButton" class="col-10">Find Recipes!</button>
    </div>
    <div id ="resultsDiv" class="container">
        <div id="recipeDiv" class ="row align-items-start">              
            <img src="img/chicken.png" alt="grilled chicken" id ="" class="recipeOverviewImage col-4">
            <div class ="recipeInfo col-8">
                <h2 id="" class="recipeOverviewName row justify-content-start">Recipe Name</h2>
                <div class ="row justify-content-end">
                    <div class="col-3">
                        <img src="img/time-blk.png" alt="clock icon" class="overviewIcon">
                    </div>
                    <div class="col-3">
                        <img src="img/fav-red.png" alt="favorite icon" class="overviewIcon">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-start">
        <button id="logoutButton" type="button" class="col-3">Log Out</button>
    </div>
    <script src="dist/app.js"></script>`
    );
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

module.exports = {printSearchResults, printLoginPage, printSearchPage};