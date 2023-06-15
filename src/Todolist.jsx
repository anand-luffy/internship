import React from "react";
import { useState } from "react";
function Todolist() {
    const [todolist,settodolist] =useState([]);
    const [newtask,setnewtask] = useState("");
    const addtask = () =>
    {   const task =  {
            id :  (todolist.length === 0)? 0 : todolist.length - 1,
            name : newtask
        };
        const newtodolist = ([...todolist,task]);
        settodolist(newtodolist);
    }

    const addnewtask = (event) =>{
        setnewtask(event.target.value);
    }

    return (  
        <div>
            <input type="text" onChange={addnewtask} />
            <button  type="submit" name="addtask" onClick={addtask}>Click</button>
            <div>
                <ul>{todolist.map((task)=>{return <li>{task.name}</li>})}</ul>
            </div>
        </div>
    );
}

export default Todolist;