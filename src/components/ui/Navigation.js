import React from "react";
import { Link } from "react-router-dom";
import swordIcon2 from "../../icon/sword02.svg";

export default function Navigation() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Link to="/hero" className="btn btn-link mt-5 mr-5">
                  <img src={swordIcon2} width="28px" alt="sword icon2" />
                  My Hero
               </Link>
               <Link to="/arena" className="btn btn-link mt-5 mr-5">
                  <img src={swordIcon2} width="28px" alt="sword icon2" />
                  Arena
               </Link>
               <Link to="/combat" className="btn btn-link mt-5 mr-5">
                  <img src={swordIcon2} width="28px" alt="sword icon2" />
                  Combat
               </Link>
            </div>
         </div>
         <hr className="font-weight-bold" />
      </div>
   );
}
