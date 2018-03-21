"use strict";
let config = require("./config");
let users = require("./users");
let postUser = require ('./fb-interactions');
let fbKey = require("./fb-key");
let $ = require('../lib/node_modules/jquery');

users.logOut();

//LOGIN BUTTON//
$("#loginButton").click(function() {
    console.log("clicked login");
    users.logInGoogle()
    .then((result) => {
      console.log("result from login", result.user.uid);
      users.setUser(result.user);
      $("#loginButton").addClass("is-hidden");
      $("#logoutButton").removeClass("is-hidden");
      postUser.checkUser(result.user.uid);
    });
  });

//LOGOUT BUTTON//
$("#logoutButton").click(() => {
    console.log("main.logout clicked");
    users.logOut();
    $("#loginButton").removeClass("is-hidden");
    $("#logoutButton").addClass("is-hidden");
});