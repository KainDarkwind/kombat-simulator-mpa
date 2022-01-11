import React from "react";
import { Link } from "react-router-dom";
import actions from "../../store/actions";

export default function Combatants(props) {
   function selectOpponent() {
      console.log("This is props passed to combatants", props);
      this.props.dispatch({ type: actions.STORE_CURRENT_OPPONENT });
   }

   return (
      <div className="container">
         <div className="row">
            <div className="col-4 font-weight-bold">
               <Link
                  to="/combat"
                  id="combat"
                  onClick={() => {
                     selectOpponent();
                  }}
               >
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
