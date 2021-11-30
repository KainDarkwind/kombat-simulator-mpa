import React from "react";
import { Link } from "react-router-dom";

export default function Combatants(props) {
   return (
      <div className="container">
         <div className="row">
            <div className="col-4 font-weight-bold">
               <Link to="/combat" id="combat">
                  <p>{props.name}</p>
                  <p>
                     <img
                        className="mt-3"
                        src={props.image}
                        width="100px"
                        alt={props.name}
                     />
                  </p>
               </Link>
               <hr />
            </div>
         </div>
      </div>
   );
}
