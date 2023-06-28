const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const app = express();
const userlog = require("./models/userdocs");

app.use(express.json());
try{
mongoose.connect("mongodb+srv://anand:anand123@cluster0.uair7fd.mongodb.net/userdocs?retryWrites=true&w=majority");
}
catch(error)
{
    console.log(error);
}
console.log(mongoose.connection.readyState);

app.use(cors());

app.get("/getlogin/:email,:password",async (req,res)=>{
    // const user = req.params.query;
    // console.log(user);
    const email =req.params.email;
    const password = req.params.password;
    console.log(email+" ggg "+ String(password));
    try{
    const check = await userlog.findOne({useremail:email});
    if(check.password === password)
    {
        res.json( "entered exists");
        console.log("entered exists");
    }
    else{
        res.json( " NOT entered exists");
        console.log("not exsiis");
    } 
    }
    catch(e){console.log(e);}
})

app.post("/createuser",async (req,res)=>{
    const user = req.body;
    const email = req.body.useremail;
    console.log(user);
    const check = await userlog.findOne({useremail:user.useremail})
    console.log(check);
    if(check)
    {
        res.json("already exists");
    }
    else{
    try{
    const check = new userlog(user);
    await check.save();
    res.json("created");
    console.log("created");
    }
    catch(err)
    {console.log(err)}
    }
})

app.listen(3001,()=>{
    console.log("server running perfectly");
})

