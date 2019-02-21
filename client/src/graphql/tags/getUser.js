import gql from 'graphql-tag';

export const GET_USER = gql`
  {
    users {
      id
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;
