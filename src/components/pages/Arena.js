import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";
import Combatants from "../ui/Combatants";

class Arena extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/KainDarkwind/kombat-simulator-mpa/main/src/mock%20data/opponents.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_OPPONENTS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .then(function () {
            // always executed
         });
   }

   render() {
      const opponents = this.props.opponents;
      return (
         <>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <Header />
                  </div>
                  <div className="col-12">
                     <Navigation />
                  </div>
               </div>
               <hr className="font-weight-bold" />
               <div className="mb-5 lead text-muted">
                  <h4>Choose an Opponent</h4>
               </div>
            </div>
            {opponents.map((opponent) => {
               return (
                  <Combatants
                     name={opponent.name}
                     image={opponent.image}
                     key={opponent.name}
                  />
               );
            })}
         </>
      );
   }
}

function mapStateToProps(state) {
   return {
      opponents: state.opponents,
   };
}
export default connect(mapStateToProps)(Arena);
