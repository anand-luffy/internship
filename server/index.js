

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/users');
//const objectid = require('mongoose').Types.ObjectId.isValid;


app.use(express.json());

mongoose.connect("mongodb+srv://anand:anand123@cluster0.xzypg8j.mongodb.net/test?retryWrites=true&w=majority");


app.get("/getusers", async (req, res) => {

    try {
      const posts= await userModel.find({ });
      res.status(200).json(posts);
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  
  });

app.get("/getusers/:id",async(req,res)=>{
  if(mongoose.isValidObjectId(req.params.id))
  {
    try{
      const post = await userModel.findOne({_id:(req.params.id)});
      res.status(200).json(post);
      console.log(post);
    }
    catch(err){
      console.log(err);
    }
  }
  else
  {
    res.status(500).json("error invalid Id");
  }
})

app.post("/createuser",async(req,res)=>{
    const user = req.body;
    const newuser = new userModel(user);
    await newuser.save();
    res.json(user);
})

app.delete("/deleteusers/:id",async(req,res)=>{
  if(mongoose.isValidObjectId(req.params.id))
  {
    try{
    const del = await userModel.deleteOne({_id:(req.params.id)});
    res.status(200).json(del);
    console.log(del);
    }
    catch(err)
    {
      console.log(err);
    }
  }
  else{
    res.status(500).json("Error invalid ID");
  }
})

app.patch("/updateusers/:id",async(req,res)=>{
  const updates = req.body;
  if(mongoose.isValidObjectId(req.params.id))
  {

    const update = await userModel.updateOne({_id:(req.params.id)},{$set: updates});
    res.status(200).json("Updateds Users");
    console.log(res);

  }
  else{
    res.status(500).json("Not update Invalid ID");
    console.log(res);
  }
})

app.put("/putusers/:id",async(req,res)=>{
  const putupdate = req.body;
  if(mongoose.isValidObjectId(req.params.id))
  {
   try{
    const update = await userModel.updateMany({_id:(req.params.id)},{$set: putupdate});
    res.status(200).json(update);
    console.log(res);
   }
   catch(err)
   {
    console.log(err);
   }
  }
  else{
    res.status(500).json("Not ");
    console.log(res);
  }

})

app.listen(3001,()=>{
    console.log("Server run Perfectly");
})

