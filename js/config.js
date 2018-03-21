"use strict";
let firebase = require("firebase/app"),
    fbKey = require("./fb-key"),
    fbData = fbKey(),
    auth = require("firebase/auth"),
    db = require("firebase/database");

var config = {
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    databaseURL: fbData.databaseURL
};

firebase.getFBsettings = () => {
     return config;
};

firebase.initializeApp(config);

module.exports = firebase;