const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema(
    {
        useremail:{
        type:String,
        required :true},
        password:{
            type: String,
            required:true
        }
    }
)

const userlogmodel = mongoose.model("details",userLoginSchema);
module.exports=userlogmodel;