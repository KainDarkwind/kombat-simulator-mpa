import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import { Link } from "react-router-dom";

export default function Arena() {
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Header />
               </div>
               <div className="col-12">
                  <Navigation />
               </div>
            </div>
            <hr className="font-weight-bold" />
         </div>

         <div className="container">
            <div className="row">
               <div className="col-7 font-weight-bold">
                  <div className="mb-5 lead text-muted">
                     <h4>Choose an Opponent</h4>
                  </div>
                  <Link to="/combat" id="goblin-combat">
                     Goblin
                  </Link>
                  <hr />
               </div>
               <div className="col-7 font-weight-bold">
                  <Link to="/combat" id="orc-combat">
                     Orc
                  </Link>
                  <hr />
               </div>

               <div className="col-7 font-weight-bold">
                  <Link to="/combat" id="ogre-combat">
                     Ogre
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}
