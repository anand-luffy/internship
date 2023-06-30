require("dotenv").config();
const express = require('express');
const cors = require("cors");
const connection = require("./db");
const app = express();
const AdduserRoute = require("./routes/Adduser.js");


connection();
app.use(express.json());
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["POST","GET"],
        credentials:true
    }
));

app.use("/user",AdduserRoute);

app.listen(3001,()=>{
    console.log("server running !");
})