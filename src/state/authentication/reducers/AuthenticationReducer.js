import { USER_AUTHENTICATED, USER_LOADING } from "../constants/constants";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
