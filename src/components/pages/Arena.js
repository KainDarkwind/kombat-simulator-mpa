import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import opponents from "../../mock data/opponents";
import Combatants from "../ui/Combatants";

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
            <div className="mb-5 lead text-muted">
               <h4>Choose an Opponent</h4>
            </div>
         </div>
         {opponents.map((opponent) => {
            return (
               <Combatants
                  name={opponent.name}
                  image={opponent.image}
                  key={opponent.name}
               />
            );
         })}
      </>
   );
}
