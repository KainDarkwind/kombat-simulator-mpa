import React from "react";
import goblinProfile from "../../img/goblin.jpg";
import heroProfile from "../../img/hero-female.jpg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

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

                  <div
                     className="
               float-right
               mt-5
               custom-control custom-radio custom-control-inline
            "
                  >
                     <input
                        type="radio"
                        id="goblin"
                        name="search"
                        className="custom-control-input"
                        defaultChecked
                     />
                     <label className="custom-control-label" htmlFor="goblin">
                        Goblin
                     </label>
                  </div>
                  <div
                     className="
               float-right
               mt-5
               custom-control custom-radio custom-control-inline
            "
                  >
                     <input
                        type="radio"
                        id="orc"
                        name="search"
                        className="custom-control-input"
                     />
                     <label className="custom-control-label" htmlFor="orc">
                        Orc
                     </label>
                  </div>
                  <div
                     className="
               float-right
               mt-5
               custom-control custom-radio custom-control-inline
            "
                  >
                     <input
                        type="radio"
                        id="ogre"
                        name="search"
                        className="custom-control-input"
                     />
                     <label className="custom-control-label" htmlFor="ogre">
                        Ogre
                     </label>
                  </div>
               </div>
            </div>
            <hr className="font-weight-bold" />
         </div>

         <div className="container">
            <div className="row">
               <div className="col-4 mt-1" id="goblin-full-col">
                  <img
                     src={goblinProfile}
                     className="mr-2 mt-1"
                     height="300px"
                     alt="goblin"
                  />
               </div>

               <div className="col-4">
                  <button
                     className="btn btn-block btn-primary ml-2 mt-9"
                     id="stab-button-opponent"
                  >
                     Stab
                  </button>
                  <button
                     className="btn btn-block btn-primary ml-2 mt-3"
                     id="slash-button-opponent"
                  >
                     Slash
                  </button>

                  <button
                     className="btn btn-block btn-primary ml-2 mt-3"
                     id="defend-button-opponent"
                  >
                     Defend
                  </button>
               </div>
               <div className="col-4">
                  <img
                     src={heroProfile}
                     className="mr-2 mt-1"
                     height="300px"
                     alt="female hero"
                  />
               </div>
            </div>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-4 border p-1">
                  <div
                     id="opponent-name"
                     className="font-weight-bold text-center"
                  ></div>
                  <div className="container">
                     <div className="row">
                        <div className="col-6">Level:</div>
                        <div className="d-inline" id="opponent-level"></div>
                     </div>
                  </div>
                  <div className="container">
                     <div className="row">
                        <div className="col-6">Hit Points:</div>
                        <div
                           className="d-inline"
                           id="opponent-hit-points"
                        ></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-6">AC:</div>
                        <div
                           className="d-inline"
                           id="opponent-armor-className"
                        ></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-6">Weapon:</div>
                        <div className="d-inline" id="opponent-weapon"></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-6">Armor:</div>
                        <div className="d-inline" id="opponent-armor"></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-2">Str:</div>
                        <div
                           className="d-inline col-2"
                           id="opponent-strength"
                        ></div>
                        <div className="d-inline col-2">Dex:</div>
                        <div
                           className="d-inline col-2"
                           id="opponent-dexterity"
                        ></div>
                        <div className="d-inline col-2">End:</div>
                        <div
                           className="d-inline col-2"
                           id="opponent-endurance"
                        ></div>
                     </div>
                     <div className="row">
                        <div className="col-2">Mnd:</div>
                        <div
                           className="d-inline col-2"
                           id="opponent-mind"
                        ></div>
                        <div className="d-inline col-2">Agi:</div>
                        <div
                           className="d-inline col-2"
                           id="opponent-agility"
                        ></div>
                        <div className="d-inline col-2">Spr:</div>
                        <div
                           className="d-inline col-2"
                           id="opponent-spirit"
                        ></div>
                     </div>
                  </div>
               </div>
               <div className="col-4 mt-8 p-5 border">
                  <div id="combat-readout"></div>
               </div>
               <div className="col-4 mt-1 border p-1" id="hero-full-col">
                  <p className="font-weight-bold text-center">Hero</p>
                  <div className="container">
                     <div className="row">
                        <div className="col-6">Level:</div>
                        <div className="d-inline" id="hero-level"></div>
                     </div>
                  </div>
                  <div className="container">
                     <div className="row">
                        <div className="col-6">Hit Points:</div>
                        <div className="d-inline" id="hero-hit-points"></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-6">AC:</div>
                        <div
                           className="d-inline"
                           id="hero-armor-className"
                        ></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-6">Weapon:</div>
                        <div className="d-inline" id="hero-weapon"></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-6">Armor:</div>
                        <div className="d-inline" id="hero-armor"></div>
                     </div>
                  </div>

                  <div className="container">
                     <div className="row">
                        <div className="col-2">Str:</div>
                        <div
                           className="d-inline col-2"
                           id="hero-strength"
                        ></div>
                        <div className="d-inline col-2">Dex:</div>
                        <div
                           className="d-inline col-2"
                           id="hero-dexterity"
                        ></div>
                        <div className="d-inline col-2">End:</div>
                        <div
                           className="d-inline col-2"
                           id="hero-endurance"
                        ></div>
                     </div>
                     <div className="row">
                        <div className="col-2">Mnd:</div>
                        <div className="d-inline col-2" id="hero-mind"></div>
                        <div className="d-inline col-2">Agi:</div>
                        <div className="d-inline col-2" id="hero-agility"></div>
                        <div className="d-inline col-2">Spr:</div>
                        <div className="d-inline col-2" id="hero-spirit"></div>
                     </div>
                  </div>
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
