var mongoose = require("mongoose");

var ideaSchema = new mongoose.Schema({
    title   : String,
    body   : String,
    tech   : String,
    author : {
        id : {
            type :mongoose.Schema.Types.ObjectId,
            ref : "User"
    }, name : String
},
comments: [
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Comment"
    }
 ],
 likes : [
     {
         type : mongoose.Schema.Types.ObjectId,
         ref : "User"
     }
 ],
 dislikes : [
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
],
    createdAt : {type : Date,default : Date.now}
});



module.exports = mongoose.model("Idea",ideaSchema);
