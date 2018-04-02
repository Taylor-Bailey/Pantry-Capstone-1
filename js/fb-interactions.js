"use strict";

// REQUIRES JQUERY, KEY, USER FUNCITONS //
let $ = require('../lib/node_modules/jquery'),
    firebaseConfig = require('./config'),
    user = require('./users'),
    ingred = require('./ingredients');


//ADD USER TO FIREBASE//
function addUser(userObject) {
    return $.ajax({
      url: `${firebaseConfig.getFBsettings().databaseURL}/users.json`,
      type: 'POST',
      data: JSON.stringify(userObject),
      dataType: 'json'
    }).done((userID) => {
      return userID;
    });
  }

//UPDATE USER IN FIREBASE//
function updateUser(userObject) {
    return $.ajax({
        url: `${firebaseConfig.getFBsettings().databaseURL}/recipes.json`,
        type: 'PUT',
        data: JSON.stringify(userObject),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}

//FIND USER IN FIREBASE//
let findUser = (uid) => {
    return $.ajax({
        url: `${firebaseConfig.getFBsettings().databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`
    }).done((resolve) => {
        ingred.getUserRecipes(resolve);
        console.log("find user is returning ", resolve);
        return resolve;
    }).fail((error) => {
        return error;
    });
};

//CHECK TO SEE IF USER IN FIREBASE//
let checkUser = (userObject) => {
    findUser(userObject.uid)
    .then((result) => {
        let data = Object.values(result);
        if (data.length === 0){
           addUser(user.makeUser(userObject.uid, userObject.displayName, userObject.photo))
            .then((result) => {
                let tmpUser = {
                    fbID: result.name,
                    uid: userObject.uid,
                    photo: userObject.photoURL
                };
                return tmpUser;
            }).then((tmpUser) => {
                return user.userValues(tmpUser);
            }).then((userObject) => {

            });
        }else{
            var key = Object.keys(result);
            data[0].fbID = key[0];
            user.userValues(data[0])
                .then((resolve) => {
                });
        }
    });
};

module.exports = {addUser, updateUser, findUser,checkUser};