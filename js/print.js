'use strict';

let ingred = require('./ingredients');
let $ = require('jquery');
let help = require('./helper');


let printLoginPage = () => {
    $("#content").html(
        `<div class="bg">
            <div class="row justify-content-center">
                <h1 id="pantry">Pantry</h1>
                <img src="img/veg-wht.png" id="loginIcon" alt="onion icon">
                <button id="loginButton" type="button" >Log In</button> 
            </div>  
        </div>`);
};

let printSearchPage = () => {
    $("#content").html(
        `<div class="topTab">
        <div class="row align-items-start">
            <div id="searchTab" class="TabActive tab col">Search</div>
            <div id="recipesTab" class="TabInactive tab col">Recipes</div>
        </div>
    </div>
    <div class="container">
        <div class="iconDiv row justify-content-center text-center">
            <div class="col-3"><img src="img/spice-blk.png" alt="salt shaker icon" class="searchIcon" id="spiceIcon"></div>
            <div class="col-3"><img src="img/veg-blk.png" alt="onion icon" id="vegIcon" class="searchIcon"></div>
            <div class="col-3"><img src="img/meat-blk.png" alt="thigh meat icon" id="meatIcon" class="searchIcon"></div>
        </div>
    <div id ="searchDiv" class="row justify-content-center">
        <input id="searchInput" type=text placeholder="search by ingredients (salt,onion,chicken)" class="col-11"></input>
        <button id="searchButton" class="col-11">Find Recipes!</button>
    </div>
    <div id ="resultsDiv" class="container">
        <div id="recipeDiv" class ="row align-items-start"></div>
    </div>
    <div class="row justify-content-start">
        <button id="logoutButton" type="button" class="col-3">Log Out</button>
    </div>`);
};

let printSearchResults = (recipe) => {
    $('#resultsDiv').append(
        `<div id="${recipe.id}" class ="recipeDiv row align-items-start">    
            <img src="${recipe.image}" alt="Image of ${recipe.title}" class="recipeOverviewImage col-6">
            <h3 class="recipeOverviewName col-4">${recipe.title}</h3>
        </div>`);
};

let printSavedPage = () => {
    $("#content").html(
    `<div class="topTab">
        <div class="row align-items-start">
            <div id="searchTab" class="TabInactive tab col">Search</div>
            <div id="recipesTab" class="TabActive tab col">Recipes</div>
        </div>
    </div>
    <div class="container">
        <div class="iconDiv row justify-content-center text-center">
            <div class="col-3"><img src="img/book-blk.png" alt="cookbook icon" id="bookIcon"></div>
    </div>
        <div id ="savedDiv" class="container">
    </div>
    <div class="row justify-content-start">
        <button id="logoutButton" type="button" class="col-3">Log Out</button>
    </div>`);
};

let printSavedResults = (recipe, recipefbId) => {
    $('#savedDiv').append(
        `<div id="${recipe.id}" value="${recipefbId}" class ="savedRecipeDiv row align-items-start">    
            <img src="${recipe.image}" alt="Image of ${recipe.title}" class="recipeOverviewImage col-6">
            <h3 class="recipeOverviewName col-4">${recipe.title}</h3>
        </div>`);
};


let printErrorMessage = () => {
    $('#resultsDiv').html(
        `<div id="recipeDiv" class ="row align-items-center">
            <h2 class ="recipeInfo col-12">You wouldn't want to eat that!</h2>
        </div>`);
};

let printRecipeInfo = (recipeObject) => {
    $("#content").html(` 
    <div class="topTab">
        <div class="row align-items-start">
            <div id="searchTab" class="TabActive tab col">Search</div>
            <div id="recipesTab" class="TabInactive tab col">Recipes</div>
        </div>
    </div>
    <div class= "container">
        <div class="infoContainer row">
            <img src="${recipeObject.image}" class = "fullRecipeImage col-12" alt="Picture of ${recipeObject.title}">
            <h2 class="recipeName col-12">${recipeObject.title}</h2>
                <img src="img/time-blk.png" alt="clock icon" class="overviewIcon">
                <p id="cookingMinutes">${recipeObject.readyInMinutes}m</p>
                <h3 class = "col-12">Ingredients</h3>
                    <ul class = "col-12">${help.ingredients(recipeObject.extendedIngredients)}</ul>
                <h3 class = "col-12">Cooking Instructions</h3>
                    <ul class = "col-12">${recipeObject.instructions}</ul>
        </div>
    </div>
    <div class="row justify-content-start">
            <button id="logoutButton" type="button" class="col-3">Log Out</button>
            <img src="img/fav-red.png" alt="favorite icon" class= "favoriteButton" id="${recipeObject.id}">
    </div>`);
};

let printSavedInfo = (recipeObject, fbId) => {
    $("#content").html(` 
    <div class="topTab">
        <div class="row align-items-start">
            <div id="searchTab" class="TabInactive tab col">Search</div>
            <div id="recipesTab" class="TabActive tab col">Recipes</div>
        </div>
    </div>
    <div class= "container">
        <div class="infoContainer row">
            <img src="${recipeObject.image}" class = "fullRecipeImage col-12" alt="Picture of ${recipeObject.title}">
            <h2 class="recipeName col-12">${recipeObject.title}</h2>
                <img src="img/time-blk.png" alt="clock icon" class="overviewIcon">
                <p id="cookingMinutes">${recipeObject.readyInMinutes}m</p>
                <h3 class = "col-12">Ingredients</h3>
                    <ul class = "col-12">${help.ingredients(recipeObject.extendedIngredients)}</ul>
                <h3 class = "col-12">Cooking Instructions</h3>
                    <ul class = "col-12">${recipeObject.instructions}</ul>
        </div>
    </div>
        <div class="row justify-content-center text-center">
            <button id="logoutButton" type="button" class="col-3">Log Out</button>
            <div class="col-3"><img src="img/book-blk.png" alt="cookbook icon" id="bookIcon2"></div>
            <button id="${recipeObject.id}" value="${fbId}" type="button" class="deleteButton col-3">Remove</button>
        </div>
    </div>`);
};



module.exports = {printSearchResults, printLoginPage, printSearchPage, printSavedPage, printErrorMessage, printRecipeInfo, printSavedResults, printSavedInfo};