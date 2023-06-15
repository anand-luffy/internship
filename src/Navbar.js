import {Link} from "react-router-dom";
import './Style.css';
function NavBar() {
    return ( 
        <div className='NavBar'>
        <ul>
        <li className="list"><Link to="/"> Home  </Link></li>
        <li className="list"><Link to="/profile">Profile  </Link></li>
        <li className="list"><Link to="/math">Mathaddition  </Link></li>
        <li className="list"> <Link to="/App"> App(items) </Link></li>
        <li className="list"><Link to="/head">  Details  </Link></li>
        <li className="list"><Link to="/todoapp">  Todoapp  </Link></li>
        <li className="list"><Link to="/Catapi">  CatapiFact  </Link></li>  
        <li className="list"><Link to="/form">Validation-Form  </Link></li>
        <li className="list"> <Link to="/customhook"> R-Custom-hook </Link></li>
        </ul>
    </div>
     );
}

export default NavBar;