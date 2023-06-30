import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import Addpost from './pages/Addpost';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Post' element={<Addpost/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
