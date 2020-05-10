import { gql } from "apollo-boost";

export const REGISTER = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;
export const LOGINFB = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      payload
    }
  }
`;
export const LOGIN = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      payload
    }
  }
`;
