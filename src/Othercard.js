import React from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth";
import { auth } from './config/firebase.ts';

function Othercard() {
    const navigate = useNavigate();
    const handlehome= async () => {
        await signOut(auth);
        navigate('/');
    }

    return ( 
        <div>

        <center>
        <button type="submit" className="btn" onClick={handlehome}>Log-out</button>
        </center>
        </div>
     );
}

export default Othercard;