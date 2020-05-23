import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
const RootReducers = combineReducers({
  auth: AuthenticationReducer,
});

export default RootReducers;
