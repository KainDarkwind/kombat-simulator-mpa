import React from "react";
import { Link } from "react-router-dom";

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
                     <div className="col-12 col-md-6 mb-6">
                        <div
                           className="card p-4 mr-md-5 landing"
                           id="sign-up-card"
                        >
                           <div className="card-block">
                              <h2 className="card-title lead">
                                 Ready for adventure?
                              </h2>
                              <p className="card-text">
                                 Create a character.
                                 <button
                                    className="
                                mt-5
                                btn
                                landing-button
                                btn-success btn-block
                             "
                                    id="sign-up"
                                 >
                                    On to Adventure!
                                 </button>
                              </p>
                           </div>
                        </div>

                        <div
                           className="card p-4 d-none landing"
                           id="intro-card"
                        >
                           <div className="card-block">
                              <h2 className="card-title lead">
                                 Ready for adventure?
                              </h2>
                              <p>Create a character.</p>
                              <p className="mt-3 text-success">
                                 Let's get you started.
                              </p>
                              <p className="mt-6">Email address</p>
                              <input
                                 className="form-control"
                                 id="sign-up-email-input"
                                 type="text"
                              />
                              <div
                                 className="text-danger"
                                 id="sign-up-email-error"
                              ></div>
                              <p>Password</p>
                              <input
                                 className="form-control"
                                 id="sign-up-password-input"
                                 type="password"
                              />
                              <div
                                 className="text-danger"
                                 id="sign-up-password-error"
                              ></div>
                              <div
                                 className="text-muted"
                                 id="sign-up-password-error-addendum"
                              ></div>
                              <button
                                 className="
                             btn
                             mt-5
                             landing-button
                             btn-success btn-block
                          "
                                 id="lets-go"
                              >
                                 Let's go!
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-6 col-12">
                        <div className="card p-4 ml-md-5 landing">
                           <div className="card-block">
                              <h2 className="card-title lead">
                                 Continuing your adventure?
                              </h2>
                              <p className="card-text">
                                 Log in with your email address and password.
                              </p>
                              <p className="mt-3">Email address</p>
                              <input className="form-control" type="text" />
                              <p className="mt-3">Password</p>
                              <input className="form-control" type="password" />

                              <Link
                                 to="/arena"
                                 className="
                             btn
                             mt-5
                             btn-success
                             landing-button
                             float-right
                          "
                              >
                                 Log in
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
