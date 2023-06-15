function Othersinform(props) {
    const key = props.keys;
    const value = JSON.parse(localStorage.getItem(key));
    return ( 
        <div>
        <div className="loginpage">
        <center>{<img  className="logo" src={value?.image} alt="userlogo" height="100" width="100"/>}</center>
        <h4>Name{value?.fullname}</h4>
        <h4>Email{value?.email}</h4>
        <br></br>
        </div>
        </div>
     );
}

export default Othersinform;