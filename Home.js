import { Addprovider } from "./Route";
import { useContext } from "react";
function Home() {
    const {username} = useContext(Addprovider);
    return ( <div>
        <center>
        <h1>Welcome to the home page !!! {username}</h1>
        </center>
    </div> );
}

export default Home;