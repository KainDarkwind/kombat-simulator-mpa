import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentOpponent from "./currentOpponent";
import opponents from "./opponents";

export default combineReducers({
   currentUser,
   opponents,
   currentOpponent,
});
