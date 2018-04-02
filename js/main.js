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
      console.log("result", result);
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
  printer.printSavedPage();
  postUser.findRecipes(users.currentUser.uid)
  .then((recipes) => {
    let recipeIdArray = [];
    for(let recipe in recipes){
      recipeIdArray.push(recipes[recipe].recipeID);
    }
    ingredRequire.getUserRecipes(recipeIdArray);
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

// postUser.showRecipes();
