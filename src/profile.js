import { Addprovider } from "./Route";
import { useContext } from "react";
import Changeusername from "./Changeusername";
function Profile() {
    const {username} = useContext(Addprovider);
    return ( <div>
        <center>
        <h1>YourName:{username} </h1>
        <Changeusername />
        </center>
    </div> );
}

export default Profile;