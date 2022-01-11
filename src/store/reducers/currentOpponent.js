import actions from "../actions";

export default function currentOpponent(currentOpponent = {}, action) {
   switch (action.type) {
      case actions.STORE_CURRENT_OPPONENT:
         return action.payload;
      default:
         return currentOpponent;
   }
}
