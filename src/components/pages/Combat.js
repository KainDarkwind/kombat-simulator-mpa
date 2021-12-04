import React from "react";

import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import users from "../../mock data/users";
import opponents from "../../mock data/opponents";
import CombatButton from "../ui/CombatButton";
const opponent = opponents[1];
const character = users[0].characters[0];

export default class Combat extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);
      this.state = {
         stateSomwhereElse: false,
         character: character,
         opponent: opponent,
         pizza: 10,
      };
   }

   setCharState(char) {
      //reach parent function
      console.log("we're setting the character state");
      console.log(
         "This is passed in from our combat roll function in the child component:",
         char
      );
      const charObj = char;

      this.setState({ character: char });
   }

   render() {
      return (
         <>
            <Header />
            <Navigation />

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
                     {character.actions.map((action) => {
                        return (
                           <CombatButton
                              action={action}
                              hero={character}
                              opponent={opponent}
                              key={action.name}
                              setCharState={this.setCharState}
                           />
                        );
                     })}
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
}
