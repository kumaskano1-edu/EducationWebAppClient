import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
const rootReducers = combineReducers({
  auth: AuthenticationReducer,
});

export default rootReducers;
