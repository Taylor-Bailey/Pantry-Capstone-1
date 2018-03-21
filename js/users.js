"use strict";
let firebaseConfig = require("./config"),
provider = new firebaseConfig.auth.GoogleAuthProvider();
let currentUser = {
    uid: null, 
    displayName: null,
    fbID: null,
    photo: null
};
  
let makeUser = (uid, fbID, displayName, photoURL) => {
    let newUserObject = {
    uid: uid, 
    fbID: fbID,
    displayName: displayName,
    photo: photoURL
    };
    return newUserObject;
};


function userValues(obj){ 
    console.log("user.userValues: obj", obj);
    return new Promise((resolve, reject) => {
        currentUser.fbID = obj.fbID ? obj.fbID : currentUser.fbID;
        currentUser.uid = obj.uid ? obj.uid : currentUser.uid;
        currentUser.displayName = obj.displayName ? obj.displayName : currentUser.displayName;
        currentUser.photoURL = obj.photoURL ? obj.photoURL : currentUser.photoURL;
        resolve(currentUser);
    });
}

// AUTHENTICATION STATUS//
firebaseConfig.auth().onAuthStateChanged(function(user){
    if (user){
        currentUser.uid = user.uid;
        console.log("User has logged into Pantry");
        console.log("onAuthStateChanged", user);
    }else{
        currentUser.uid = null;
        currentUser.fbID = null;
        currentUser.photo = null;
        currentUser.displayName = null;
        console.log("No user logged into Pantry");
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
    console.log("set user", val);
    currentUser.uid = val.uid;
    currentUser.displayName = val.displayName;
    currentUser.photo = val.photoURL;
}
function getUser(){
    return currentUser.uid;
}

module.exports = {logInGoogle, logOut, setUser, getUser, makeUser, userValues};