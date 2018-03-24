"use strict";
let $ = require('jquery');
let config = require("./config");
let users = require("./users");
let postUser = require ('./fb-interactions');
let fbKey = require("./fb-key");
const ingredRequire = require("./ingredients");

users.logOut();

//LOGIN BUTTON//
$("#loginButton").click(function() {
    console.log("clicked login");
    users.logInGoogle()
    .then((result) => {
      console.log("result from login", result.user.uid);
      users.setUser(result.user);
      postUser.checkUser(result.user);
    });
  });

//LOGOUT BUTTON//
$("#logoutButton").click(() => {
    console.log("main.logout clicked");
    users.logOut();
});

//SEARCH BUTTON//
$("#searchButton").click(event =>{
  event.preventDefault();
  let input = $("#searchInput").val();
  let ingredients = input;
  ingredRequire.getIngredients(ingredients);
  $("#searchInput").val("");
});