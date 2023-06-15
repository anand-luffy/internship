import Math from './math';
import {Todoapp} from './Todoapp';
import {Catapi} from './Catapi';
import App from './App';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Route as R,Routes} from "react-router-dom";
import NavBar from './Navbar';
import Profile from './Profiles';
import { useState,createContext} from 'react';
import Form from './Form';
import { Customhook } from './Customhook';

export const Addprovider = createContext()

export function Route() {
    const [username,setusername] =  useState("anand");
    return ( 
        <div> 
        <Addprovider.Provider value={{username,setusername}}>
        <Router>
            <NavBar />
        <Routes>
              <R path="/" element={<Home />} />
              <R path="/todoapp" element={<Todoapp />} />
              <R path="/App" element={<App />} />
              <R path="/profile" element={<Profile />} />
              <R path="/head" element={<Header />} />
              <R path="/Catapi" element={<Catapi />} />
              <R path ="/customhook" element={<Customhook />}/>
              <R path="/math" element={<Math />} />
              <R path="/form" element={<Form />} />
              <R path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        </Router> 
        </Addprovider.Provider>
        </div>
     );
}
export default Route;

