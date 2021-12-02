import React from "react";
// import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { Navigate } from "react-router-dom";

export default class Login extends React.Component {
   constructor(props) {
      super(props);
      console.log("In login component");

      this.state = {
         emailError: "",
         hasEmailError: false,
         passwordError: "",
         hasPasswordError: false,
      };
   }

   async setEmailState(emailInput) {
      const emailPattern = /^[\w]\S*@[a-zA-Z\d][\w-]+\.[a-zA-Z]{2,}$/;
      const isValidEmail = emailPattern.test(emailInput);

      if (emailInput.length === 0) {
         console.log("There is no email text entered.");
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      } else if (isValidEmail === false) {
         console.log("Doesn't pass the regex vibe.");

         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         console.log("The email is just right.");

         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   async setPasswordState(passwordInput, emailInput) {
      if (passwordInput.length === 0) {
         console.log("There is no password text entered.");

         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else {
         console.log("The password is just right.");

         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      const emailInput = document.getElementById("login-email-input").value;
      const passwordInput = document.getElementById(
         "login-password-input"
      ).value;

      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         <Navigate to="/create-answer" />;
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };

         console.log(user);
      }
      //   if (emailInput.length === 0)
      //      this.setState({ emailError: "Please enter your email address." });
   }

   render() {
      return (
         <div className="col-md-6 col-12">
            <div className="card p-4 ml-md-5 landing">
               <div className="card-block">
                  <h2 className="card-title lead">Welcome back.</h2>
                  <p className="card-text">
                     Log in with your email address and password.
                  </p>
                  <p className="mt-6">Email address</p>
                  <input
                     className={classnames({
                        "form-control": true,
                        "is-invalid": this.state.hasEmailError,
                     })}
                     id="login-email-input"
                     type="text"
                  />
                  {this.state.hasEmailError && (
                     <p className="text-danger" id="login-email-error">
                        {this.state.emailError}
                     </p>
                  )}
                  <p className="mt-3">Password</p>
                  <input
                     className={classnames({
                        "form-control": true,
                        "is-invalid": this.state.hasPasswordError,
                     })}
                     id="login-password-input"
                     type="password"
                  />
                  {this.state.hasPasswordError && (
                     <p className="text-danger" id="login-password-error">
                        {this.state.passwordError}
                     </p>
                  )}

                  <button
                     id="login-button"
                     className="
                             btn
                             mt-5
                             btn-primary
                             landing-button
                             float-right
                          "
                     onClick={() => {
                        this.validateAndCreateUser();
                     }}
                  >
                     Log in
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
