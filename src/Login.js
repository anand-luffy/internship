
import React, { useState } from "react";
import'./App.css';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {auth,db,provider} from './config/firebase.ts';
import { signInWithPopup } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth';
import { addDoc, collection } from "firebase/firestore";


export function Login() {
    const [typeinput,settypeinput] = useState("password");
    const [visible,setvisible] = useState(true);
    const [emailinput,setemailinput] = useState("");
    const [passinput,setpassinput] = useState("");
    const [bool,setbool] = useState(false);
    const [error,seterror] = useState("");
    const navigate = useNavigate();
    const user = Object.keys(localStorage);
    const length = user.length;
    const [author] = useAuthState(auth);
    var l,value,keys;

    const handleclick = () =>{
        typeinput==="password" ? settypeinput("text") : settypeinput("password");
        visible === true ? setvisible(false)  :setvisible(true) ;
    }

    const handleemail = (e) =>{
        setemailinput(e.target.value);
    }
    const handlepassword = (e) =>{
        setpassinput(e.target.value);
    }
    const handlesubmit =() =>{
        for( l = 0;l < localStorage.length ; l++)
        {
            keys = localStorage.key(l);
            value = JSON.parse(localStorage.getItem(keys));
            if(emailinput === value.email && passinput ===value.confirmpassword)
            {
                setbool(true);
                navigate('/collection',{state:{key : keys}});
            }
            console.log(keys,value);
        }
        bool === true ? navigate('/collection',): seterror("password-incorrect") ;
    }
    const handlesignup = () =>{
        navigate('/card');
    }

    const userref = collection(db,"card");

    const siginwithgoogle = async() =>{
        const res = await signInWithPopup(auth,provider);
        console.log(res);
        const newdata = {
            age:  author?.age || auth.currentUser?.age || "-",
            email: author?.email || auth.currentUser?.email,
            fullname: author?.displayName || auth.currentUser?.displayName,
            image :  author?.photoURL || auth.currentUser?.photoURL
            }
        await addDoc(userref,newdata);
        localStorage.setItem('user'+length,JSON.stringify(newdata)) ; 
        navigate('/collection',{state:{key:'user'+length}});
    }

    return ( 
    <div className="loginpage">
        <h2 className="text1">Sign in to our platform</h2><br></br>
        <h4 className="text2">Login here using your username and password</h4><br></br>
        <hr></hr><br></br>
        <h3 className="text2" >Your Email</h3>
        <div className="emailinput">
        <input type="text" onChange={handleemail} placeholder="exampletest@gmail.com" />
        </div><br></br>
        <h3 className="text2">Your Password</h3>
        <div className="passwordinput">
        <input type= {typeinput} onChange={handlepassword} placeholder="Password" />
        {
            visible === true ? <AiFillEye onClick={handleclick} size={22} /> :<AiFillEyeInvisible onClick={handleclick} size={22}/>
        }
        </div>
        <br></br><br></br>
        <center>
        <button type="submit" className="btn" onClick={handlesubmit}>Sign in</button>
        <br></br>
        {<h4 style={{color:'red'}}>{error}</h4>}
        <br></br>
        <div className="split">
        <div className="split signup">
        <h4 style={{color:'#003060'}} onClick={handlesignup}><u>Sign up</u></h4>
        </div>
        <div className="split google">
        <h4  onClick={siginwithgoogle}><FcGoogle size={25}></FcGoogle></h4>
        </div>
        </div>
        </center>
    
    </div> );
}

