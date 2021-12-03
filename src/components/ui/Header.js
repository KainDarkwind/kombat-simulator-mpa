import React from "react";
import swordIcon1 from "../../icon/sword01.svg";
import { Link } from "react-router-dom";
import exitDoor from "../../icon/icon-door-exit.svg";

export default function Header() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Link to="/">
                  <img src={swordIcon1} width="28px" alt="sword icon" />
                  <h3 className="d-inline text-brand">
                     Kain's Kombat Simulator
                  </h3>
               </Link>
               <Link to="/" className="btn btn-link float-right">
                  <img src={exitDoor} width="28px" alt="exit door" />
                  Log Out
               </Link>
            </div>
         </div>
      </div>
   );
}
