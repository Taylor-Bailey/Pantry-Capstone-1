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
$("#loginButton").click(function() {
    console.log("clicked login");
    users.logInGoogle()
    .then((result) => {
      users.setUser(result.user);
      postUser.checkUser(result.user);
      printer.printSearchPage();
    });
  });

//LOGOUT BUTTON//
$("#logoutButton").click(() => {
    users.logOut();
    printer.printLoginPage();
});

//SEARCH BUTTON//
$("#searchButton").click(event =>{
  event.preventDefault();
  let input = $("#searchInput").val();
  let ingredients = input;
  ingredRequire.getIngredients(ingredients)
  .then((data) => {
    printer.printSearchResults();
  });
  $("#searchInput").val("");
});

//SEARCH TAB BUTTON//
$("#searchTab").click(event => {
  event.preventDefault();
  printer.printSearchPage();
});

//RECIPES TAB BUTTON//
$("#recipesTab").click(event => {
  event.preventDefault();
  printer.printSavedPage();
});

//RECIPE VIEW BUTTON//
$(document).on("click" , ".recipeDiv", function(){
  event.preventDefault();
  var id = $(this).attr("id");
  console.log("recipe ID: ", id);
});