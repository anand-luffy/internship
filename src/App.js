import './App.css';
import Card from './Card';
import { Login } from './Login';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Collection } from './Collection';
import Othercard from './Othercard';

function App() {
  return (
    <div className='App-login'> 
    <Router>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/card' element={<Card />}/>
      <Route path='/collection' element={<Collection />}/>
      <Route path='/othercard' element={<Othercard />}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
