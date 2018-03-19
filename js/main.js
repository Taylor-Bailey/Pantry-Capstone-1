"use strict";
let config = require("./config");
let users = require("./users");
let postUser = require ('./postUser');
let fbKey = require("./fb-key");
let $ = require('../lib/node_modules/jquery');

users.logOut();

$("#loginButton").click(function(){
    users.logInGoogle()
    .then((login) => {
        console.log("got the user", login.user.uid);
        postUser.addUser(postUser.buildUserObject(login.user.displayName, login.user.uid, login.user.photoURL));
    });
});
