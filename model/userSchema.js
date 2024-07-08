//this is my Mongodb Schema /model/userSchema.js
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    imageUrl:{type:String,required:true}, 
    price:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true}})
module.exports= mongoose.model('User',userSchema);