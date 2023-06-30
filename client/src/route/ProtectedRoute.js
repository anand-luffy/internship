import React, { useEffect, useState } from "react";
import { Outlet,Navigate } from "react-router-dom";

function ProtectedRoute() {
    const [auth,setauth] = useState(sessionStorage.getItem(sessionStorage.key(0)));
   
    return ( 

        auth !== null ? <Outlet /> : <Navigate to= "/" />

     );
}

export default ProtectedRoute;