const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:{type:String,unique:true},
    password:String,
  
}) 

const User = mongoose.model("User",Userschema)

module.exports = User