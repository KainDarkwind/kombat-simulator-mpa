import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Combatants extends React.Component {
   selectOpponent() {
      console.log("This is props passed to combatants", this.props);
      this.props.dispatch({
         type: actions.STORE_CURRENT_OPPONENT,
         payload: this.props.opponent,
      });
   }
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-4 font-weight-bold">
                  <Link
                     to="/combat"
                     id="combat"
                     onClick={() => {
                        this.selectOpponent();
                     }}
                  >
                     <p>{this.props.opponent.name}</p>
                     <p>
                        <img
                           className="mt-3"
                           src={this.props.opponent.image}
                           width="100px"
                           alt={this.props.opponent.name}
                        />
                     </p>
                  </Link>
                  <hr />
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(store) {
   return {
      opponents: store.opponents,
   };
}
export default connect(mapStateToProps)(Combatants);
