
import {Todoapp} from './Todoapp';
import App from './App';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Route as R,Routes} from "react-router-dom";
import NavBar from './Navbar';
import { useState,createContext} from 'react';


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
              <R path="/head" element={<Header />} />
              <R path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        </Router> 
        </Addprovider.Provider>
        </div>
     );
}
export default Route;

