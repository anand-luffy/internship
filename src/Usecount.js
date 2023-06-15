import { useState} from "react";
export function Usecount( initailize = 0 ){

    const [count,setcount] = useState(initailize);

    const increase = () => {
        setcount(()=>count+1);
    }
    const decrease = () => {
        setcount(()=>count-1);
    }
    const reset = () => {
        setcount(0);
    }

    return { count,increase,decrease,reset };

}