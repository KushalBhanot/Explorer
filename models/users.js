var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var findOrCreate = require('mongoose-findorcreate');
// const { model } = require("./Blog");
// const { model } = require("./comment");

var userSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    image : String, 
    googleId : String,
    githubId : String,
    facebookId : String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
module.exports = mongoose.model("User",userSchema);
