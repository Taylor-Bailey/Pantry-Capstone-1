"use strict";
let firebase = require("firebase/app"),
    fb = require("./fireBaseKey"),
    fbData = fb(), //running the fb file, containing what's inside fb-key
    auth = require("firebase/auth"),
    db = require("firebase/database");

var config = {
  apiKey: fbData.apiKey,
  authDomain: fbData.authDomain,
  databaseURL: fbData.databaseURL
};

firebase.getFBsettings = function(){
    //  console.log("getFBsettings", config);
     return config;
};

firebase.initializeApp(config);

module.exports = firebase;