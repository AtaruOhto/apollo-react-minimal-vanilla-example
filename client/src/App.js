import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider, useQuery } from "react-apollo-hooks";
import { appClient } from "./graphql/client";
import { GET_USER } from "./graphql/tags/getUser";

const UserList = () => {
  const { data, error, loading } = useQuery(GET_USER);

  if (loading) {
    return <div>Loading...</div>;
  };

  if (error) {
    return `Error! ${error.message}`;
  };

  return (
    <ul>
      {
        data.users.map(user => (<li key={user.id}>{user.name}</li>))
      }
    </ul>
  );
};

export const App = () => (
  <ApolloProvider client={appClient}>
    <ApolloHooksProvider client={appClient}>
      <UserList/>
    </ApolloHooksProvider>
  </ApolloProvider>
)
