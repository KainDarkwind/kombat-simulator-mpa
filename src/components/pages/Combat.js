import React from "react";

import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import users from "../../mock data/users";
import opponents from "../../mock data/opponents";
const opponent = opponents[1];
const character = users[0].characters[0];

export default function Combat() {
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
               <div className="col-4 mt-1" id="opponent-full-col">
                  <img
                     src={opponent.image}
                     className="mr-2 mt-1"
                     height="300px"
                     alt={opponent.name}
                  />
               </div>

               <div className="col-4">
                  <button
                     className="btn btn-block btn-primary ml-2 mt-9"
                     id="action-one-button"
                  >
                     {character.actions[0].name}
                  </button>
                  <button
                     className="btn btn-block btn-primary ml-2 mt-3"
                     id="action-two-button"
                  >
                     {character.actions[1].name}
                  </button>

                  <button
                     className="btn btn-block btn-primary ml-2 mt-3"
                     id="action-three-button"
                  >
                     {character.actions[2].name}
                  </button>
               </div>
               <div className="col-4">
                  <img
                     src={character.image}
                     className="mr-2 mt-1"
                     height="300px"
                     alt={character.name}
                  />
               </div>
            </div>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-4 mt-1 border p-1">
                  {" "}
                  <div
                     id="opponent-name"
                     className="font-weight-bold text-center"
                  >
                     {opponent.name}
                  </div>
                  <div className="">Level:{opponent.level}</div>
                  <div className="">Hit Points: {opponent.hp}</div>
                  <div className="">Power: {opponent.pwr}</div>
                  <div className="">Luck: {opponent.lck}</div>
                  <div>
                     <span className="font-weight-bold">Attacks:</span>{" "}
                     {opponent.actions[0].name}
                  </div>
               </div>
               <div className="col-4 mt-8 p-5 border">
                  <div id="combat-readout"></div>
               </div>
               <div className="col-4 border p-1">
                  <div
                     id="character-name"
                     className="font-weight-bold text-center"
                  >
                     {character.name}
                  </div>

                  <div className="">Level:{character.level}</div>

                  <div className="">Hit Points: {character.hp}</div>

                  <div className="">Power: {character.pwr}</div>

                  <div className="">Luck: {character.lck}</div>
               </div>
            </div>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-4 offset-4">
                  <button
                     className="btn btn-block btn-primary ml-2 mt-9"
                     id="reload"
                  >
                     Clear Combat Log
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
