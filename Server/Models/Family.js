const mongoose = require('mongoose')

const FamilySchema = new mongoose.Schema({
    name:String,
    relation:String,
    age:Number,
    gender:String,
    height:Number,
    weight:Number,
    bmi:Number,
    email:String,
})

const Family = mongoose.model("Family",FamilySchema)

module.exports = Family