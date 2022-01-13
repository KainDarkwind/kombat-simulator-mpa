import React from "react";
// import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import actions from "../../store/actions";

class Login extends React.Component {
   constructor(props) {
      super(props);
      console.log("In login component");

      this.state = {
         emailError: "",
         hasEmailError: false,
         passwordError: "",
         hasPasswordError: false,
         validUsers: [],
         isValidUser: false,
      };
   }

   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/KainDarkwind/kombat-simulator-mpa/main/src/mock%20data/users.json"
         )
         .then((res) => {
            // handle success
            console.log(res.data);
            const validUsers = res.data;
            this.setState({ validUsers });
            // console.log(this.state.validUsers[0]);
         })
         .catch((error) => {
            // handle error
            console.log(error);
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

   /*
when the login button is clicked:

user object is created.
compare user.email to db.email, change state to foundemail
compare user.password to db.fakeemail, change state to foundpassword
if foundemail and foundpassword are true, change state to founduser
if founduser, change state of userIndex to index of user.
run store_current_user
navigate

*/

   getAndStoreValidUser() {
      const emailInput = document.getElementById("login-email-input").value;

      const validEmails = this.state.validUsers.filter((user) => {
         return user.email === emailInput;
      });
      if (validEmails.length > 0) {
         console.log("it's valid yall", validEmails[0]);
         this.props.dispatch({
            type: actions.STORE_CURRENT_USER,
            payload: validEmails[0],
         });
         this.setState({ isValidUser: true });
      } else {
         console.log("big old dud.");
         return "";
      }
   }

   // storeUser() {
   //    this.props.dispatch({
   //       type: actions.STORE_CURRENT_USER,
   //       payload: ,
   //    });
   // }

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
                  {this.state.isValidUser && <Navigate to="/hero" />}

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
                        this.getAndStoreValidUser();
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

function mapStateToProps(store) {
   return { user: store.currentUser };
}
export default connect(mapStateToProps)(Login);
