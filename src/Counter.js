import React from "react";
import { Usecount } from "./Usecount";
import './Style.css';
export function Counter() {
    const { count,increase,decrease,reset } = Usecount();
    return (  <div>
        {count}
        <button type="submit"  className="btn-submit" onClick={increase}>+</button>
        <button type="submit"  className="btn-submit" onClick={decrease}>-</button>
        <button type="submit"  className="btn-submit" onClick={reset}>reset</button>
        
    </div> );
}

