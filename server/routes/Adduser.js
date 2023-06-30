//const mongoose = require("mongoose");
const userdata = require("../models/User");
const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/",async(req,res)=>{
    try{
    const user = await userdata.findOne({useremail : req.body.useremail});
    if(user)
    {
        return res.status(409).json("User already exists");
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashpassword = await bcrypt.hash(req.body.password,salt);
    await new userdata({...req.body,password:hashpassword}).save();
    res.status(201).json("User created");
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }

});

router.get("/:email,:password",async(req,res)=>{
    console.log("entred");
    const email =req.params.email;
    const password = req.params.password;
    console.log(email+" ggg "+ String(password));
    try{
        const user = await userdata.findOne({useremail:req.params.email})
        if(!user)
        {
            res.json("Invalid Email or Password");
        }
        const vaildpassword = await bcrypt.compare(req.params.password,user.password );
        if(!vaildpassword)
        {
            res.json("Invalid Email or Password");
        }
        else{
        console.log(user);
        const token = jwt.sign({id:user._id.toString()},process.env.JWYPriovatekey,{
            expiresIn: '5d'
        })
        console.log(token);
        res.json({auth:true,token:token,message:"logged"})
        }
    }
    catch(error)
    {
        console.log("eror");
      
    }
})
module.exports = router;