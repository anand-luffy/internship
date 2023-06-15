import React, { useState } from "react";
export function Personapi() {
    const [inputname,setinputname] =  useState("");
    const [Data,setData] = useState(null);
    const handleClick = () => {
        console.log(inputname);
       fetch(`https://api.agify.io?name=${inputname}`).then((res)=>res.json()).then((data)=>{console.log(data); setData(data); });
    }

    const onText = (event) =>{
        setinputname(event.target.value);
    }

    return ( 
        <div>
            <center>
                <h4>Person name enter suitable value given as predicted</h4>
                <input type="text" onChange={onText} />
                <button type="submit" onClick={handleClick}>Click me : </button>
                <div className="person">
                    <h4>PersonName:{Data?.name}</h4>
                    <h4>Personage:{Data?.age}</h4>
                    <h4>PersonCount:{Data?.count}</h4>
                </div>
            </center>
        </div>
     );
}

