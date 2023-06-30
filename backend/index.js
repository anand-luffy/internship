const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userdocs = require('./models/Post');

const app = express();
app.use(express.json());
app.use(cors());
try{
    mongoose.connect("mongodb+srv://anand:anand123@cluster0.uair7fd.mongodb.net/post?retryWrites=true&w=majority");
    }
catch(error)
   {
        console.log(error);
    }
console.log(mongoose.connection.readyState);

app.post("/Addpost",async(req,res)=>{
    const user = req.body;
    try{
    const user1 =new userdocs(user);
    await user1.save();
    res.json("Update user Successfully");
    }
    catch(error)
    {
        console.log(error);
    }

})

app.get("/getpost",async(req,res)=>{
    try{
        const post = await userdocs.find({});
        res.status(200).json(post);
        console.log(post);
      }
      catch(err){
        console.log(err);
      }
    
})

app.listen(3001,()=>{
    console.log("server run perfectly");
})

