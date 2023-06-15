import React, { useEffect, useState } from "react";
import { Personapi } from './Personapi';

export function Catapi() {
    const [content,setcontent] = useState("");
  
    const handleclick = () =>{
        fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{setcontent(data.fact)});
    }
    useEffect(()=>{console.log('mounted')},[])
    return (  
        <div>
            <center><h1>API</h1>
            <button type="submit"  onClick={handleclick}> Generate cat Fact :) </button>
            <div><center>{content}</center></div></center>
            <Personapi />
        </div>
    );
}



