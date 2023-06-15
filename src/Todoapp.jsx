import React from "react";
import { useState } from "react";
export function Todoapp() {
    const [todolist,settodolist] =useState([]);
    const [newtask,setnewtask] = useState("");
    const addtask = () =>
    {   const task =  {
            id :  (todolist.length === 0)? 0 : todolist[ todolist.length - 1].id+1,
            name : newtask,
            completed : false
        };
        const newtodolist = ([...todolist,task]);
        settodolist(newtodolist);
    }

    const addnewtask = (event) =>{
        setnewtask(event.target.value);
    }

    const oncomplete = (id) =>
    {  
        const newtodolist = todolist.map((task)=>{
            if(task.id===id)
            {
                return {...task,completed : true};
            }
            else{
                return task;
            }
        })
        settodolist(newtodolist);
    }
    const ondelete = (id) => {
        const newtodo = todolist.filter((task)=>{ return task.id!==id})
        settodolist(newtodo);
    }

    return (  
        <div>
        <center><h1>Todolist</h1>
        <input type="text" onChange={addnewtask} />
        <button  type="submit" name="addtask" onClick={addtask}>Click</button></center>
        <div>
            <ul>{todolist.map((task)=>{return (<div><li style={{backgroundColor: task.completed === true ? "green" : "red"}}>{task.name}</li>
            <button onClick={()=> oncomplete(task.id)}>complete</button>
            <button onClick={()=> ondelete(task.id)}>Delete</button>
          </div>)})}</ul>
        </div>
    </div>
    );
}

