"use strict";
var $ = require('jquery');

let cookTime = (data) => {
    var minutes = data%60;
    var hours = (data-minutes)/60;

    return hours + "h " + minutes + "s";
};

module.exports = {cookTime};