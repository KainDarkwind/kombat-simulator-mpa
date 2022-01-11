import actions from "../actions";

export default function opponents(opponents = [], action) {
   // action.GET_OPPONENT = "GET_OPPONENT"
   switch (action.type) {
      case actions.STORE_OPPONENTS:
         return action.payload;
      default:
         return opponents;
   }
}
