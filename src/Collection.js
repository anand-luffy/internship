import React  from "react";
import './App.css';
import {  useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase.ts";
export function Collection() {

    const location = useLocation();
    const user = location.state.key;
    console.log(location.state.key)
    const value = JSON.parse(localStorage.getItem(user));
    const navigate = useNavigate();

    // const handleothers = () => {
        
    //     navigate('/othercard');
    // }
    const handlehome= async() => {
        await signOut(auth);
        navigate('/');
    }

    return ( 
        <div className="loginpage">
        <center>{<img  className="logo" src={value?.image} height="100" width="100" alt="userlogo"/>}</center>
        <br></br>
        <h3 className="text2" >Your Card</h3>
        <hr></hr>
        <br></br>
        <br></br>
        <table >
        <h4><tr><th>Keyid</th><th>{user}</th></tr></h4>
        <h4><tr><th>Name</th><th>{value?.fullname}</th></tr></h4>
        <h4><tr><th>Age   </th><th>{value?.age}</th></tr></h4>
        <h4><tr><th>Email</th><th>{value?.email}</th></tr></h4>
        <h4><tr><th>Price</th><th>$10.00</th></tr></h4>
        </table>
        <br></br>
        <center>
        <button type="submit" className="btn" onClick={handlehome}>Logout</button>
        <br></br>
        {/* <br></br>
        <h4 style={{color:'#003060',cursor:'pointer'}} onClick={handlehome}>Logout</h4> */}
        </center>
        </div>
        
     );
}

