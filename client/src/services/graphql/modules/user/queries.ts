import { gql } from "@apollo/client";

const GET_USERS = gql`
  {
    users {
      name
      email
      posts
    }
  }
`;

const GET_USER = gql`
  query getUser($email: String!, ) {
    user(email: $email) {
      name
      email
    }
  }
`;