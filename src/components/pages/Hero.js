import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import ActionInfoList from "../ui/ActionInfoList";
import users from "../../mock data/users";
import classnames from "classnames";

const character = users[0].characters[0];
const characterActions = character.actions;

export default class Hero extends React.Component {
   constructor(props) {
      super(props);
      console.log("In Hero component");
      this.state = {
         isHoveredOver: false,
      };
   }

   setIsHoveredOver(isHoveredOver) {
      this.setState({ isHoveredOver: isHoveredOver });
      return;
   }

   render() {
      return (
         <div>
            <Header />

            <Navigation />

            <div className="container">
               <div className="row">
                  <div className="col-6">
                     <img
                        src={character.image}
                        alt="Female Hero"
                        className="img-fluid"
                     />
                  </div>
                  <div className="border p-1 col-3">
                     <div className="font-weight-bold">
                        <u>Hero Stats</u>
                     </div>
                     <div className="col-8">
                        <div className="d-inline font-weight-bold">
                           Hit Points:
                        </div>
                        <div className="float-right d-inline" id="char-hp">
                           {character.hp}
                        </div>
                     </div>
                     <div className="col-8">
                        <div className="d-inline font-weight-bold">
                           Action Points:
                        </div>
                        <div className="float-right d-inline" id="char-ap">
                           {character.ap}
                        </div>
                     </div>
                     <div className="col-8">
                        <div className="d-inline font-weight-bold">Power:</div>
                        <div className="float-right d-inline" id="char-pwr">
                           {character.pwr}
                        </div>
                     </div>

                     <div className="col-8">
                        <div className="d-inline font-weight-bold">Luck:</div>
                        <div className="float-right d-inline" id="char-luck">
                           {character.lck}
                        </div>
                     </div>
                  </div>

                  <div className="border p-1 col-3">
                     <div className="font-weight-bold">
                        <u>Hero Actions</u>
                     </div>
                     <div>
                        {characterActions.map((action) => {
                           return (
                              <ActionInfoList
                                 action={action}
                                 name={action.name}
                                 key={action.name}
                              />
                           );
                        })}
                     </div>
                  </div>
               </div>
               <div
                  className={classnames({
                     border: true,
                     "d-none": this.state.isHoveredOver === false,
                  })}
                  id="information-text"
               >
                  <span> is being hovered over.</span>
               </div>
            </div>
         </div>
      );
   }
}
