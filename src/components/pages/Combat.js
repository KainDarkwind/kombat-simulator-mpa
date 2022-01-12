import React from "react";

import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import users from "../../mock data/users";
// import opponents from "../../mock data/opponents";
// import { getRandomInt } from "../../utils/helpers";
import CombatButton from "../ui/CombatButton";
import getCssClasses from "classnames";
import { connect } from "react-redux";
// import axios from "axios";
// import actions from "../../store/actions";
import currentOpponent from "../../store/reducers/currentOpponent";

const character = users[0].characters[0];

class Combat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         character: character,
         opponent: currentOpponent,
         combatMessage: "",
         heroCrit: false,
         isHeroDead: false,
         isOpponentDead: false,
      };
   }

   clearCombatLog = () => {
      this.setState(() => ({
         combatMessage: "",
         heroCrit: false,
      }));
   };
   resetCombat = () => {
      this.setState(() => ({
         character: character,
         opponent: currentOpponent,
         combatMessage: "",
         heroCrit: false,
         isHeroDead: false,
         isOpponentDead: false,
      }));
   };

   setOppState = (resolution) => {
      console.log("we're setting the opponent state");
      this.setState((prevState) => ({
         opponent: { ...prevState.opponent, hp: resolution.newOpponentHp },
         isOpponentDead: resolution.isOpponentDead,
      }));
   };
   setCombatMessage = (message) => {
      console.log("we're setting the combat message");
      this.setState(() => ({
         combatMessage:
            message.heroCombatMessage + " " + message.opponentCombatMessage,
      }));
   };
   setCharState = (resolution) => {
      //reach parent function
      console.log("we're setting the character state");

      this.setState((prevState) => ({
         character: {
            ...prevState.character,
            hp: resolution.newHeroHp,
            ap: resolution.newHeroAp,
         },
         heroCrit: resolution.heroCrit,
         isHeroDead: resolution.isHeroDead,
      }));
   };

   render() {
      return (
         <>
            <Header />
            <Navigation />

            <div className="container">
               <div className="row">
                  <div className="col-4 mt-1" id="opponent-full-col">
                     <img
                        src={currentOpponent.image}
                        className="mr-2 mt-1"
                        height="300px"
                        alt={currentOpponent.name}
                     />
                  </div>
                  <div
                     className={getCssClasses("col-4", "text-center", {
                        "d-none":
                           this.state.isHeroDead || !this.state.isOpponentDead,
                     })}
                  >
                     <p className="font-weight-bold">YOU WIN!</p>
                     <img
                        src="face-of-victory.webp"
                        height="250px"
                        alt="laughing viking of victory"
                     />
                  </div>
                  <div
                     className={getCssClasses("col-4", "text-center", {
                        "d-none": !this.state.isHeroDead,
                     })}
                  >
                     <p className="font-weight-bold">YOU LOSE.</p>
                     <img src="skull-of-loss.webp" alt="skull of defeat" />
                  </div>
                  <div
                     className={getCssClasses("col-4", {
                        "d-none":
                           this.state.isHeroDead || this.state.isOpponentDead,
                     })}
                  >
                     {character.actions.map((action) => {
                        return (
                           <CombatButton
                              action={action}
                              hero={this.state.character}
                              opponent={this.state.opponent}
                              key={action.name}
                              setCharState={this.setCharState}
                              setOppState={this.setOppState}
                              setCombatMessage={this.setCombatMessage}
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
                     {""}
                     <div
                        id="opponent-name"
                        className="font-weight-bold text-center"
                     >
                        {currentOpponent.name}
                     </div>
                     <div className="">Level:{currentOpponent.level}</div>
                     <div className="">
                        Hit Points: {this.state.opponent.hp}
                     </div>
                     <div className="">Power: {currentOpponent.pwr}</div>
                     <div className="">Luck: {currentOpponent.lck}</div>
                     <div>
                        <span className="font-weight-bold">Attacks:</span>{" "}
                        {currentOpponent.actions[0].name}
                     </div>
                  </div>
                  <div className="col-4 mt-8 p-5 border">
                     <div
                        className={getCssClasses({
                           "text-danger": this.state.heroCrit,
                           "font-weight-bold": this.state.heroCrit,
                        })}
                        id="combat-readout"
                     >
                        <span
                           className={getCssClasses({
                              "d-none": !this.state.heroCrit,
                           })}
                        >
                           CRITICAL HIT!
                           <br></br>
                        </span>
                        {this.state.combatMessage}
                     </div>
                  </div>
                  <div className="col-4 border p-1">
                     <div
                        id="character-name"
                        className="font-weight-bold text-center"
                     >
                        {character.name}
                     </div>

                     <div className="">Level:{character.level}</div>

                     <div className="">
                        Hit Points: {this.state.character.hp}
                     </div>
                     <div className="">
                        Action Points: {this.state.character.ap}
                     </div>

                     <div className="">Power: {character.pwr}</div>

                     <div className="">Luck: {character.lck}</div>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="row">
                  <div className="col-4 offset-4">
                     <button
                        className="btn btn-block btn-primary ml-2 mt-7"
                        id="reload"
                        onClick={() => {
                           this.clearCombatLog();
                        }}
                     >
                        Clear Combat Log
                     </button>
                  </div>
                  <div className="col-4 offset-4">
                     <button
                        className="btn btn-block btn-primary ml-2 mt-2"
                        id="reload"
                        onClick={() => {
                           this.resetCombat();
                        }}
                     >
                        Restart
                     </button>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

function mapStateToProps(state) {
   return {
      opponents: state.opponents,
      currentOpponent: state.currentOpponent,
   };
}
export default connect(mapStateToProps)(Combat);
