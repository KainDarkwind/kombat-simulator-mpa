import React from "react";
import SignUp from "../ui/SignUp";
import Login from "../ui/Login";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h1 className="d-inline text-brand">
                     Kain's Kombat Simulator
                  </h1>
               </div>
               <div className="col-lg-10 offset-lg-1">
                  <div className="row">
                     <SignUp />
                     <Login />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
