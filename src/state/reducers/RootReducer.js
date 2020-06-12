import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import ProjectFetch from "./ProjectsReducer";
const RootReducers = combineReducers({
  auth: AuthenticationReducer,
  personal: ProjectFetch,
});

export default RootReducers;
