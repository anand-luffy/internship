import React from "react";
import './Style.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export default function Form() {
    const [formclass,setformclass] = useState(true);

    const schema = yup.object().shape(
        {
            fullname : yup.string().required(" your fullName is required bro "),
            email : yup.string().email().required(" your email is needed "),
            age : yup.number().positive().integer().min(4).required("").typeError("your age is required,Enter properly"),
            password : yup.string().min(4).max(20).required("password is required atleast 4 characters"),
            confirmpassword : yup.string().oneOf([yup.ref("password"),null],"your password is mismatched").required("please fill this section correctly")
        }
    );



    const {register,handleSubmit,formState:{errors}} = useForm(
        {resolver : yupResolver(schema) }
    );

    const handletheme = () => {
        setformclass(!formclass);
    }

    const clicksubmit = (data) => {
        console.log(data)
    }

    return ( 
        <div>
        <div className= {formclass===true?"formwhite":"formdark"}>
            <div className="theme"><button type="submit" className="btn-theme" onClick={handletheme}><img src="https://cdn-icons-png.flaticon.com/512/391/391097.png?w=740&t=st=1686301426~exp=1686302026~hmac=752a1dd2194c5d65cdaac72bb21a4e7e9e66f9b386d11b1ff1ce57284e350db0" alt="theme" /></button></div>
            <div className="Title"><h3>Card</h3></div>
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

