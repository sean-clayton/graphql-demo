import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "graphql-client";
import ChatView from "components/ChatView";

class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ChatView />
      </ApolloProvider>
    );
  }
}

export default Root;
