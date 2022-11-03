import React  from "react";
import { Header } from "../../header/header";
import { Navbar } from "../../navbar/navbar";

// function start
 export const Home=()=>{
    return(
        <>
         <div className="home">
           <Navbar/>
           <Header/>
         </div>

        </>

    )
 }