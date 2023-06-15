import React from 'react';
import './App.css';
import Addcontact from "./Addcontact";
import { useState } from 'react';

 export function App(){
  const [counters,setcounters] = useState([
    {id:1,value:0},
    {id:2,value:0},
    {id:3,value:0},
    {id:4,value:0},
    {id:5,value:0}
  ]);

  // const handlereset = () =>{
  //   const newcounter = counters.map( c=> {c.value=0; return c;});
  //   setcounters(newcounter);
  //  }

   const Handledelete =cid=>{
    //console.log("clicked",cid);
    const con = counters.filter(count => count.id!==cid);
    setcounters(con);
    //this.state.counters[cid].value=this.counters.value--);    

   }
    return (
    <div>
      {/* <button onClick={handlereset} className="btn">Reset</button>  */}
      {counters.map(Counter => <Addcontact key={Counter.id}  onDelete={Handledelete} value={Counter.value} id={Counter.id}>
        <h2 className="value">Value of count:</h2>
      </Addcontact>)}
    </div>);
}
 


