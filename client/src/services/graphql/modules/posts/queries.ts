import { gql } from "@apollo/client";

const GET_POSTS = gql`
  {
    posts {
      title
      content
      published
    }
  }
`;

const GET_POST = gql`
  query getPost($id: String!, ) {
    post(id: $id) {
      title
      content
      published
    }
  }
`;