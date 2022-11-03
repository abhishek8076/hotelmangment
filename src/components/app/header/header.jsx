import React  from "react";
import './header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCab, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
// function start
 export const Header=()=>{
    return(
        <>
         <div className="header">
            <div className="headercont">
          <div className="headerList">
            <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>car rentels</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
            </div>
          </div>
         </div>
         </div>

        </>

    )
 }