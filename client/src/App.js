import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Login } from './pages/login';
import Createuser from './pages/Createuser';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/createuser' element={<Createuser/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
