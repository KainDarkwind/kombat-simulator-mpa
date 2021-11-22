import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import heroProfile from "../../img/hero-female.jpg";

export default function Hero() {
   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Header />
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-6">
                  <img
                     src={heroProfile}
                     alt="Female Hero"
                     className="img-fluid"
                  />
               </div>
               <div className="border p-1 col-3">
                  <div className="font-weight-bold">
                     <u>Hero Stats</u>
                  </div>
                  <div className="col-6">
                     <div className="d-inline font-weight-bold">Strength:</div>
                     <div
                        className="float-right d-inline"
                        id="hero-strength"
                     ></div>
                  </div>

                  <div className="col-6">
                     <div className="d-inline font-weight-bold">Dexterity:</div>
                     <div
                        className="float-right d-inline"
                        id="hero-dexterity"
                     ></div>
                  </div>
                  <div className="col-6">
                     <div className="d-inline font-weight-bold">Endurance:</div>
                     <div
                        className="float-right d-inline"
                        id="hero-endurance"
                     ></div>
                  </div>
                  <div className="col-6">
                     <div className="d-inline font-weight-bold">Mind:</div>
                     <div className="float-right d-inline" id="hero-mind"></div>
                  </div>
                  <div className="col-6">
                     <div className="d-inline font-weight-bold">Agility:</div>
                     <div
                        className="float-right d-inline"
                        id="hero-agility"
                     ></div>
                  </div>
                  <div className="col-6">
                     <div className="d-inline font-weight-bold">Spirit:</div>
                     <div
                        className="float-right d-inline"
                        id="hero-spirit"
                     ></div>
                  </div>
               </div>

               <div className="border p-1 col-3">
                  <div className="font-weight-bold">
                     <u>Hero Equipment</u>
                  </div>
                  <div className="col-10">
                     <div className="d-inline font-weight-bold">
                        Primary Hand:
                     </div>
                     <div
                        className="float-right d-inline"
                        id="hero-hand-primary"
                     ></div>
                  </div>
                  <div className="col-10">
                     <div className="font-weight-bold">Off Hand:</div>
                     <div id="hero-hand-off"></div>
                  </div>
                  <div className="col-10">
                     <div className="d-inline font-weight-bold">Armor:</div>
                     <div
                        className="float-right d-inline"
                        id="hero-armor-body"
                     ></div>
                  </div>
                  <div className="col-10">
                     <div className="font-weight-bold">Helm:</div>
                     <div id="hero-armor-head"></div>
                  </div>
                  <div className="col-10">
                     <div className="font-weight-bold">Boots:</div>
                     <div id="hero-armor-foot"></div>
                  </div>
                  <div className="col-10">
                     <div className="font-weight-bold">Arms:</div>
                     <div id="hero-armor-arms"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
