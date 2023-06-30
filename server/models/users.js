
const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
        name:{
        type:String,
        required:true
        },
        age:{
            type:Number,
            required:true
        },
        username:{
            type:String,
            required:true
            }
    }
)

const userModel = mongoose.model("users",userschema);

module.exports= userModel;