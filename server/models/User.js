const mongoose = require("mongoose");

const createuser =  new mongoose.Schema({
        useremail:{
        type:String,},
        password:{
            type: String,
    
        }
    })



const userdata = mongoose.model("user",createuser);
module.exports=userdata;
