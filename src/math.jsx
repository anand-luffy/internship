import  { useState } from "react";
import React from "react";
function Math() {
 
        var [input1] = useState(0);
        var [input2] = useState(0);
        var [value,setvalue] = useState(0);
        const handleclick=()=>{
            setvalue(parseInt(input1,10)+parseInt(input2,10));
        }
        const handleinput1=(event)=>{
            input1 =(event.target.value);
        }
        const handleinput2=(event)=>{
            input2 =(event.target.value);
        }
        return (
            <div>
                <center>
                <h1>Addition</h1>
                <input type="text" name="input1" onChange={handleinput1}/>
                <input type="text" name="input2" onChange={handleinput2}/>
                <button type="submit" onClick={handleclick}>Click</button>
                <div>{value!=="" && value}</div>
                </center>
            </div>
        );
    }
 
export default Math;