require("dotenv").config();
const express = require('express');
const cors = require("cors");
const connection = require("./db");
const app = express();
const AdduserRoute = require("./routes/Adduser.js");
const userdata = require("./models/User");
const bcrypt = require("bcrypt");

connection();
app.use(express.json());
app.use(cors());
app.use("/user",AdduserRoute);

app.listen(3001,()=>{
    console.log("server running !");
})