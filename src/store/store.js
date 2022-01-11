import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers/combineReducers";

const initialState = {
   currentUser: {},
   opponents: [],
   currentOpponent: {},
};

export default createStore(
   combineReducers,
   initialState,
   composeWithDevTools()
);
