"use strict";

let firebaseConfig = require("./config"),
provider = new firebaseConfig.auth.GoogleAuthProvider();

let currentUser = {
    uid: null, 
    displayName: null,
    photo: null,
    fbID: null,
    recipes: []
};
  
let makeUser = (uid, displayName, photoURL) => {
    let newUserObject = {
    uid: uid, 
    displayName: displayName,
    photo: photoURL
    };
    return newUserObject;
};


function userValues(obj){ 
    return new Promise((resolve, reject) => {
        currentUser.fbID = obj.fbID ? obj.fbID : currentUser.fbID;
        currentUser.uid = obj.uid ? obj.uid : currentUser.uid;
        currentUser.displayName = obj.displayName ? obj.displayName : currentUser.displayName;
        currentUser.photo = obj.photoURL ? obj.photoURL : currentUser.photoURL;
        resolve(currentUser);
    });
}

// AUTHENTICATION STATUS//
firebaseConfig.auth().onAuthStateChanged(function(user){
    if (user){
        currentUser.uid = user.uid;
        currentUser.displayName = user.displayName;
        currentUser.photo = user.photoURL;
    }else{
        currentUser.uid = null;
        currentUser.photo = null;
        currentUser.displayName = null;
        currentUser.fbID = null;
    }
});

//USER SIGN IN/OUT FUNCTIONS//
function logInGoogle() {
    return firebaseConfig.auth().signInWithPopup(provider);
}
function logOut(){
    return firebaseConfig.auth().signOut();
}
function setUser(val){
    currentUser.uid = val.uid;
    currentUser.displayName = val.displayName;
    currentUser.photo = val.photoURL;
}
function getUser(){
    return currentUser.uid;
}

module.exports = {logInGoogle, logOut, setUser, getUser, makeUser, userValues, currentUser};