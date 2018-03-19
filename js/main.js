"use strict";
let config = require("./config");
let users = require("./users");
let fbKey = require("./fb-key");
let $ = require('../lib/node_modules/jquery');

$("#loginButton").click(function(){
    users.logInGoogle()
    .then((login) => {
        console.log("got the user", login.user.uid);
    });
});
