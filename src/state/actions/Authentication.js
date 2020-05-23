import { USER_AUTHENTICATED, USER_LOADING } from "../constants/constants";

export const Authenticated = (user) => {
  return {
    type: USER_AUTHENTICATED,
    payload: user,
  };
};

export const Loading = () => {
  return {
    type: USER_LOADING,
  };
};
