const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        // required:true
    },
    mobile:{
        type:Number,
    },
    password:{
        type:String,
        // required:true
    }
})

module.exports = new mongoose.model("Users",UsersSchema)