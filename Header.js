import React ,{useRef}from "react";
//import ReactDOM  from "react-dom";
import './App.css';

// const r = <h1>hello world</h1>
// ReactDOM.render(r,document.getElementById('root'));

export default function Header(){
    const pName= useRef("")
    const pNumber = useRef("");
    let returnName,returnNum;
    function consoleprint(e){
        returnName = pName.current.value;
        returnNum = pNumber.current.value;
        console.log(returnName+" "+returnNum);
    }
    return(
        <div>
        <div className="menu">
            <div clasname="text-title">
                Contact Manager
            </div>
        </div>
        <div className="container">
        <div className="addcontact">
        <h3>Enter the PersonName:</h3>
        <input type="text"  ref={pName} placeholder="name"/>
        <h3>Enter the PhoneNumber:</h3>
        <input type="text"  ref={pNumber} placeholder="number"/></div>
        <button name="submit" onClick={consoleprint}>Onclick</button>
        </div>
        <div><center>!!!useRef method to enter value at consolelog!!!</center></div>
        </div>

    );
}
