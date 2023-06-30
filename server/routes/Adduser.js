//const mongoose = require("mongoose");
const userdata = require("../models/User");
const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const  session = require("express-session");
const cookieParser = require("cookie-parser");

router.use(cookieParser());
router.use(bodyparser.urlencoded( {extended:true}))
router.use(
session({
        key:"userid",
        secret:process.env.SecretKey,
        resave:false,
        saveUninitialized:false,
        cookie:{
            expiresIn: 60*60*24,
        }
    })
)

router.post("/",async(req,res)=>{
    try{
    const user = await userdata.findOne({useremail : req.body.useremail});
    if(user)
    {
       res.send({message:"User already exists"});
    }
    else{
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    await bcrypt.hash(req.body.password,salt).then((hash)=>{
    new userdata({...req.body,password : hash}).save();
    });
    res.send( {message: "User created" });
    }
    }
    catch(error)
    {
        console.log(error);
        res.json({message:"error"});
    }

});

router.get("/",async(req,res)=>{
   
    if(req.session.user)
    {
        res.send({loggedIn:true});
    }
    else
    {
        res.send({loggedIn:false});
    }
})

router.get("/:email,:password",async(req,res)=>{
    const email =req.params.email;
    const password = req.params.password;
    try{
        const user = await userdata.findOne({useremail:req.params.email})
        if(!user)
        {
            res.send( {message:"Invalid Email or Password"});
        }
        const vaildpassword = await bcrypt.compare(req.params.password,user.password );
        if(!vaildpassword)
        {
            res.json({message:"Invalid  Password"});
        }
        else{
        console.log(user);
        const token = jwt.sign({id:user._id.toString()},process.env.JWYPriovatekey,{
            expiresIn: '5d'
        })
        console.log(token);
        req.session.user = user;
        res.json({auth:true,token:token,cookie:req.session.user,message:"logged"})
        }
    }
    catch(error)
    {
        console.log(error);
      
    }
})
module.exports = router;