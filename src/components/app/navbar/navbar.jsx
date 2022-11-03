import React  from "react";
import './navbar.scss';
// function start
 export const Navbar=()=>{
    return(
        <>
         <div className="navbar">
            <div className="nav-cont">
                <div className="logo">Logo</div>
                <div className="navitems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
         </div>

        </>

    )
 }