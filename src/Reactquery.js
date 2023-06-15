import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
function Reactquery() {
    const {data} = useQuery(["cat"],async()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    })
    return ( 
        <div>
            <h2>{data?.fact}</h2>
        </div>
     );
}

export default Reactquery;