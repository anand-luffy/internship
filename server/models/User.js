const mongoose = require("mongoose");

const createuser =  new mongoose.Schema({
        useremail:{
        type:String,
        required :true},
        password:{
            type: String,
            required:true
        }
    })



const userdata = mongoose.model("user",createuser);
module.exports=userdata;
