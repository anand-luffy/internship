const mongoose = require('mongoose');

module.exports = () =>{
    try{
        mongoose.connect(process.env.DB);
        console.log("Db connected");
    }
    catch(error){
        console.log(error);
    }
}