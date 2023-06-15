import { useState } from "react";
import { Addprovider } from "./Route";
import { useContext } from "react";
function Changeusername() {
    const {setusername} = useContext(Addprovider);
    const [name,setname] = useState("");
    const handlename = (event) =>{
        setname(event.target.value);
    }
    const handleclick = () =>{
        setusername(name);
    }
    return ( <div>
        <input type="text" onChange={handlename}/>
        <button type="submit" onClick={handleclick}>Update</button>
    </div> );
}

export default Changeusername;