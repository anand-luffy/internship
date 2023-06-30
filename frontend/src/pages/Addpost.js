import React, { useState } from "react";
import { MdOutlineDriveFileMove } from "react-icons/md";
import "../App.css";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import  axios from "axios";

function Addpost() {
    
    const [name,setname] = useState("");
    const [des,setdes]= useState("");
    const [typeofile,settypefile]= useState("");

    const handlepost = async() =>{
       
        axios.post("http://localhost:3001/Addpost",{
            Title:name,
            Description:des,

        }).then((res)=>{console.log(res.data)}).catch((e)=>{console.log(e)});
        console.log("submiited");
    }

    return ( 
    <div>
        <Navbar />
        <Box marginTop={"15%"} width={"350px"} marginLeft={"auto"} marginRight={"auto"}  >
            <Card>
                <CardContent>
                    <Typography textAlign={"center"}>Post - Quotes
                    {/* <input  type="file" id="up" style={{display:"none"}} onChange={(e)=>{settypefile(e.target.files[0])}}/>
                    <br></br>
                    <label for="up" style={{cursor:"pointer"}}><br></br>{"  "}<MdOutlineDriveFileMove size={35} ></MdOutlineDriveFileMove></label><br></br> */}
                    </Typography>
                    <input type="text" onChange={(event)=>{setname(event.target.value)}} placeholder="...Title"/><br></br>
                    <input type="text" onChange={(event)=>{setdes(event.target.value)}}placeholder="...describe" />
                    <CardActions>
                        <Button onClick={handlepost}>
                            Share
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    </div>);
}


export default  Addpost;