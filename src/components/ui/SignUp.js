import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("In sign up component");
      this.state = {
         isDisplayingLowerInputs: false,
         isDisplayingUpperInputs: true,
         emailError: "",
         hasEmailError: false,
         passwordError: "",
         hasPasswordError: false,
      };
   }

   togglesInputs() {
      this.setState({
         isDisplayingLowerInputs: !this.state.isDisplayingLowerInputs,
      });
      this.setState({
         isDisplayingUpperInputs: !this.state.isDisplayingUpperInputs,
      });
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
      const normalizedPassword = passwordInput.toLowerCase().trim();
      const passwordInputLength = normalizedPassword.length;
      const listOfEmailParts = emailInput.split("@");
      const localEmail = listOfEmailParts[0];
      const unacceptablePasswords = ["123456789", "1racecar1"];
      const uniqChars = [...new Set(passwordInput)];

      if (passwordInputLength === 0) {
         console.log("There is no password text entered.");

         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInputLength < 9) {
         console.log("The password is too short.");

         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (
         normalizedPassword.includes(localEmail) &&
         localEmail.length >= 4
      ) {
         console.log("The password cannot match email.");

         this.setState({
            passwordError:
               "All or part of your email address cannot be used in your password.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         console.log("Find more chars, yo.");
         this.setState({
            passwordError: `Your password must contain at least 3 unique characters`,
            hasPasswordError: true,
         });
      } else if (unacceptablePasswords.includes(normalizedPassword)) {
         console.log("The password cannot be lame.");

         this.setState({
            passwordError: `Your password contains a commonly used password, "${passwordInput}" and can be easily discovered by attackers. Please use something else.`,
            hasPasswordError: true,
         });
      } else {
         console.log("The password is just right.");

         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      const emailInput = document.getElementById("sign-up-email-input").value;
      const passwordInput = document.getElementById(
         "sign-up-password-input"
      ).value;

      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
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
         <div className="col-12 col-md-6 mb-6">
            {this.state.isDisplayingUpperInputs && (
               <div className="card p-4 mr-md-5 landing" id="sign-up-card">
                  <div className="card-block">
                     <h2 className="card-title lead">Nice to meet you.</h2>
                     <p className="card-text">
                        Sign up for White Bear. Free forever.
                        <button
                           className="
                                  mt-5
                                  btn
                                  landing-button
                                  btn-primary btn-block
                               "
                           id="sign-up"
                           onClick={() => {
                              this.togglesInputs();
                           }}
                        >
                           Sign up
                        </button>
                     </p>
                  </div>
               </div>
            )}

            {this.state.isDisplayingLowerInputs && (
               <div className="card p-4 landing" id="intro-card">
                  <div className="card-block">
                     <h2 className="card-title lead">Nice to meet you.</h2>
                     <p>Sign up for White Bear. Free forever.</p>
                     <p className="mt-3 text-success">
                        Let's get you signed up.
                     </p>
                     <p className="mt-6">Email address</p>
                     <input
                        className={classnames({
                           "form-control": true,
                           "is-invalid": this.state.hasEmailError,
                        })}
                        id="sign-up-email-input"
                        type="text"
                     />
                     {this.state.hasEmailError && (
                        <p className="text-danger" id="sign-up-email-error">
                           {this.state.emailError}
                        </p>
                     )}
                     <p>Password</p>
                     <p className="text-muted">
                        Must be 9 characters or longer.
                     </p>
                     <input
                        className={classnames({
                           "form-control": true,
                           "is-invalid": this.state.hasPasswordError,
                        })}
                        id="sign-up-password-input"
                        type="password"
                     />
                     {this.state.hasPasswordError && (
                        <p className="text-danger" id="sign-up-password-error">
                           {this.state.passwordError}
                        </p>
                     )}

                     <button
                        to="/create-answer"
                        className="
                               btn
                               mt-5
                               landing-button
                               btn-primary btn-block
                            "
                        id="lets-go"
                        onClick={() => {
                           this.validateAndCreateUser();
                        }}
                     >
                        Let's go!
                     </button>
                  </div>
               </div>
            )}
         </div>
      );
   }
}
