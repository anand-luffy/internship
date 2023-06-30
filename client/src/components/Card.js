import { Avatar, Box, Card, CardHeader, IconButton,CardActions,CardMedia,CardContent,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import {HiShare} from "react-icons/hi";
import {AiOutlineLike} from "react-icons/ai";
import {FiMoreVertical} from "react-icons/fi";
import "../App.css";

export function Cardcom(props) {
  
    return ( 
        <Card sx={{ maxWidth: 445 ,margin:"15%"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red[500] "}} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <FiMoreVertical></FiMoreVertical>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="h4" color="text.primary">{props.item.Title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.Description}<br></br>
            {/* Other contents
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like. */}
          </Typography>
        </CardContent>
        <CardActions >
          <IconButton aria-label="add to favorites">
         <AiOutlineLike></AiOutlineLike>
          </IconButton>
          <IconButton aria-label="share">
          <HiShare></HiShare>
          </IconButton>
         
        </CardActions>
      </Card>
        
     );
}

