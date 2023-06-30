import './App.css';
import React,{useState,useEffect} from "react";
import Axios from "axios";

function App() {

  const [listofuser,setlistofuser] = useState([{}]);
  const [name,setname] = useState("");
  const [username,setusername] = useState("");
  const [age,setage] = useState(0);

  useEffect(()=>{
      Axios.get("http://localhost:3001/getusers").then((response)=>{
        setlistofuser(response.data);
      })
  },[]);

  const createuser = ()=>{
    Axios.post("http://localhost:3001/createuser",{name:name,age:age,username:username}).then((response)=>{
      alert("Success USER CREATED");
      setlistofuser([...listofuser,{name:name,age:age,username:username}]);
    })
  }


  return (
    <div className="App">  
       <div className="user">
          {listofuser.map((user)=>{
            return (<div>
                  <h1>Name:{user.name}</h1> 
                  <h1>Age:{user.age}</h1> 
                  <h1>userName:{user.username}</h1> 
                  </div>)
          })}
       </div>

       <div className='form'>
        <input type='text' placeholder='name' onChange={(event)=>{setname(event.target.value)}}></input>
        <input type='number' placeholder='age' onChange={(event)=>{setage(event.target.value)}}></input>
        <input type='text' placeholder='username' onChange={(e)=>{setusername(e.target.value)}}></input>
        <button onClick={createuser}>createuser</button>
       </div>
    </div>
  );
}

export default App;
