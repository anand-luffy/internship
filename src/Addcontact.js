import { Component } from "react";
import "./App.css";
class addcontact extends Component{
    state = { 
        count:this.props.value,
     };
    handleclick = (product) => {
        console.log(product);
        this.setState({count:this.state.count+1});
    };

    render() { 
        //console.log("props",this.props);
        return ( <div>
            {this.props.children};
            <span className={this.getbadge()}>{this.formatcount()}</span>
            <button onClick={()=>{this.handleclick(this.props.id)}} className="btn">click</button>
            <button onClick={()=>(this.props.onDelete(this.props.id))} className="del">delete</button>
        </div>);
    }
    getbadge()
    {   let badge ="btn" 
        return  badge+= this.state.count%2===0  ? "red" : "blue";
    }
    formatcount()
    {
        return this.state.count;
    }
}
 
export default addcontact;