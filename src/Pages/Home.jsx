import React from "react";
import {v4 as uuid} from "uuid";

const Home = ({name})=>{
    
    console.log(name)
    return(
        <>
        <div className="home">
        <h1>Welcome {name} !</h1>
        <div className="profile">
            <div>
                <h2>User Profile</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2paNURw1DBfUC5w4I3m3EoIo7vHLpWxtXCg&usqp=CAU" alt="img"></img>
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h3>ID: {uuid()}</h3>
                <h3>Address: 43 avenue park street</h3>
                <h3>Email: user@gmail.com</h3>
                <h3>Contact: 7869352673 </h3>
            </div>
        </div>
        </div>
        </>
    )
}

export {Home};