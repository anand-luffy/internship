import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Login } from './pages/login';
import Createuser from './pages/Createuser';
import  {Home} from "./pages/Home.js";
import  {Addpost} from "./pages/Addpost.js";
import ProtectedRoute from './route/ProtectedRoute';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/createuser' element={<Createuser/>} />
            <Route path='/Home' element={<Home/>}/>
            <Route element={<ProtectedRoute />}>
                <Route path='/Post' element={<Addpost/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

