const mongoose = require('mongoose');

const usermodel = new mongoose.Schema({

    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
})

const userdocs = mongoose.model("userpost",usermodel);

module.exports = userdocs;