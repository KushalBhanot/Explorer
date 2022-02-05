var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    body : String,
    created : {type : Date,default : Date.now}

});

module.exports = mongoose.model("Contact",contactSchema);