"use strict";
let $ = require('jquery');
let config = require("./config");
let users = require("./users");
let postUser = require ('./fb-interactions');
let fbKey = require("./fb-key");
const ingredRequire = require("./ingredients");
let printer = require('./print');

// users.logOut();

//LOGIN BUTTON//
$(document).on("click" , "#loginButton", function() {
    users.logInGoogle()
    .then((result) => {
      users.setUser(result.user);
      postUser.checkUser(result.user);
      printer.printSearchPage();
    });
  });

//LOGOUT BUTTON//
$(document).on("click" , "#logoutButton", function() {
    users.logOut();
    printer.printLoginPage();
});

//SEARCH BUTTON//
$(document).on("click" , "#searchButton", function(){
  event.preventDefault();
  let ingredients = $("#searchInput").val();
  ingredRequire.getIngredients(ingredients)
  .then((data) => {
    printer.printSearchResults();
  });
  $("#searchInput").val("");
});

//SEARCH TAB BUTTON//
$(document).on("click" , "#searchTab", function() {
  event.preventDefault();
  printer.printSearchPage();
});

//RECIPES TAB BUTTON//
$(document).on("click" , "#recipesTab", function() {
  event.preventDefault();
  postUser.findRecipes(users.currentUser.uid)
  .then((recipes) => {
    printer.printSavedPage(recipes);
    let recipeIdArray = [];
    let recipefbId = "";
    for(let recipe in recipes){
      recipeIdArray.push(recipes[recipe].recipeID);
      recipefbId = recipes[recipe].recipeFbId;
    }
    ingredRequire.getUserRecipes(recipeIdArray, recipefbId);
  });
});

//RECIPE VIEW BUTTON//
$(document).on("click" , ".recipeDiv", function(){
  event.preventDefault();
  var id = $(this).attr("id");
  ingredRequire.getRecipeInfo(id)
  .then((recipe) => {
    printer.printRecipeInfo(recipe);
  });
});

//SAVED RECIPE VIEW BUTTON//
$(document).on("click" , ".savedRecipeDiv", function(){
  event.preventDefault();
  var id = $(this).attr("id");
  var fbId = $(this).attr("value");
  ingredRequire.getRecipeInfo(id)
  .then((recipe) => {
    printer.printSavedInfo(recipe, fbId);
  });
});


//FAVORITE BUTTON//
$(document).on("click" , ".favoriteButton", function(){
  event.preventDefault();
  var id = $(this).attr("id");
      let recipeObject = {
      recipeID : id,
      uid: users.currentUser.uid
      };
  postUser.updateUser(recipeObject);
});

//DELETE BUTTON//
$(document).on("click",".deleteButton", function(){
  event.preventDefault();
  var fbId = $(this).attr("value");
  postUser.deleteRecipe(fbId)
  .then((data) => {
    postUser.findRecipes(users.currentUser.uid)
    .then((recipes) => {
      printer.printSavedPage(recipes);
      let recipeIdArray = [];
      let recipefbId = "";
      for(let recipe in recipes){
        recipeIdArray.push(recipes[recipe].recipeID);
        recipefbId = recipes[recipe].recipeFbId;
      }
      ingredRequire.getUserRecipes(recipeIdArray, recipefbId);
    });
  });
    
  });
