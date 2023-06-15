import React, { useEffect } from "react";
import './Style.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {  useNavigate } from "react-router-dom";
import { addDoc,collection } from "firebase/firestore";
import { db } from "./config/firebase.ts";

export default function Card() {
    const [data,setdata] = useState();
    const navigate = useNavigate();
    const user = Object.keys(localStorage);
    const length = user.length;
    const userref = collection(db,"card");
    const schema = yup.object().shape(
        {
            fullname : yup.string().required(" your fullName is required bro "),
            email : yup.string().email().required(" your email is needed "),
            age : yup.number().positive().integer().min(4).required("").typeError("your age is required,Enter properly"),
            password : yup.string().min(4).max(20).required("password is required atleast 4 characters"),
            confirmpassword : yup.string().oneOf([yup.ref("password"),null],"your password is mismatched").required("please fill this section correctly")
        }
    );

    useEffect(() => {
        if(data)
       { localStorage.setItem('user'+length,JSON.stringify(data)) }
    },[data]);

    const {register,handleSubmit,formState:{errors}} = useForm(
        {resolver : yupResolver(schema) }
    );

    const clicksubmit = async (newdata) => {
        console.log(newdata);
        setdata(newdata);
        await addDoc(userref,{
            age: newdata.age,
            email:newdata.email,
            fullname:newdata.fullname,
            id:'user'+length,
        })
        navigate('/');
    }

    return ( 
        <div >
        <div className= "Card">
            <div className="Title"><h3>Card</h3></div><hr></hr>
            <form onSubmit={handleSubmit(clicksubmit)} className="forms">
                <input type="text" placeholder="fullName" {...register("fullname")} />
                <h5 className="error">{errors.fullname?.message}</h5>
                <input type="text" placeholder="email" {...register("email")}/>
                <h5 className="error">{errors.email?.message}</h5>
                <input type="number" placeholder="age" {...register("age")}/>
                <h5 className="error">{errors.age?.message}</h5>
                <input type="password" placeholder="password" {...register("password")}/>
                <h5 className="error">{errors.password?.message}</h5>
                <input type="password" placeholder="confirmPassword" {...register("confirmpassword")}/>
                <h5 className="error">{errors.confirmpassword?.message}</h5>
                <button type="submit" className="btn-submit" >Submit</button>
            </form>
        </div>
        </div>
     );
}

