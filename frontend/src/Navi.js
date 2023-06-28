import './App.css';
import { Login } from './login.js'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { createContext, useState } from 'react';
import Createuser from './Createuser';

export const Appcontext = createContext();

function Navi() {
  const [userauth,setuserauth] = useState({});
  return (
    <div className='App-login'> 
    <Appcontext.Provider value={{userauth,setuserauth}}>
    <Router>
    <Routes>
      <Route path='/' element={ <Login /> }/>
      {/* <Route path='/home' element={<Home/>} /> */}
      <Route path='/createuser' element={<Createuser/>} />
    </Routes>
    </Router>
    </Appcontext.Provider>
    </div>
  );
}

export default Navi;