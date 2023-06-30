
import React, { useEffect, useState } from "react";

import "../App.css";
import axios  from "axios";
import { Cardcom } from  "../components/Card";

function Home() {
    
    const [list,setlist] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/getpost").then((res)=>{setlist(res.data);console.log(res.data);}).catch((e)=>{console.log(e)});
    },[])
   
    return ( 
    <div>
        {
            list.map((item)=> <center><Cardcom item = {item} /></center> )
        }
    </div>
     );
}

export default Home;
