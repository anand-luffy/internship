import React, {  useState } from "react";
import './login.css';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import Axios from "axios";
import {useNavigate } from 'react-router-dom';
 
export function Login() {

    const [visible,setvisible] = useState(false);
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [type,settype] = useState("password");
    const [state,setstate] = useState("");
    const navigate = useNavigate();
    const[error,seterror]= useState("");
    
    const handlevisible = () => {
        type==="password" ? settype("text") : settype("password");
        setvisible(!visible);
    }

    const handlelogin= async() =>{
        Axios.get(`http://localhost:3001/user/${email},${pass}`).then((Response)=>{
           console.log(Response.data);setstate(Response.data.message);
           localStorage.setItem("token",Response.data.token);
        }).catch((error)=>{console(error);})

    }


    return ( 
        <div className="login">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLkHEGZo-Sj8I4jJ-AL1kVcqlCTHYNFPxKQ&usqp=CAU" alt="no" className="logoimg" height={"100px"} width={"100px"}></img>
                <div className="col1">
                    <div className="logininside">
                        <center>
                        <div className="inputbox">
                        <input type="text"  placeholder="email.." onChange={(e)=>{setemail(e.target.value)}} />
                        </div>
                        <div className="inputbox">
                        <input type={type}  placeholder="password.." onChange={(e)=>{setpass(e.target.value)}}  />
                        {visible===false ? <AiFillEyeInvisible onClick={handlevisible} size={25}></AiFillEyeInvisible> : <AiFillEye onClick={handlevisible} size={25}> </AiFillEye> }
                
                        </div>
                        </center>
                        <button type="submit" className="btn1" onClick={handlelogin}>Login</button> 
                    </div>
                </div>
                <h6 style={{color:"red",textAlign:"center"}}>{error}</h6>
                <h4 className="skip" onClick={()=>{navigate('/createuser')}}>signup</h4>
                {state!=="" && <center><h3>{state}</h3></center>}
                <h6>copyrights-2023 @anand</h6>
        </div>
     );
}

