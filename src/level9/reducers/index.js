import { combineReducers } from "redux";
import counter from "./counterReducer";
import input from "./inputReducer";

export default combineReducers({
  counter,
  input
});
