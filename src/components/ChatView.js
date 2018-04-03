import React from "react";
import { Query, Mutation, Subscription } from "react-apollo";
import ChatMessages from "components/ChatMessages";
import ChatForm from "components/ChatForm";
import CreateMessage from "queries/CreateMessage.graphql";
import NewMessages from "queries/NewMessages.graphql";
import GetMessages from "queries/GetMessages.graphql";

export default class ChatView extends React.Component {
  render() {
    return (
      <main className="chat-view">
        <Query query={GetMessages}>
          {({ loading, data }) => {
            if (loading) {
              return <span>Loading...</span>;
            }
            if (data) {
              return (
                <Subscription query={NewMessages}>
                  {({ data: newMessage }) => (
                    <ChatMessages data={data} newMessage={newMessage} />
                  )}
                </Subscription>
              );
            }
          }}
        </Query>
        <Mutation
          mutation={CreateMessage}
          onError={error => {
            console.error(error);
          }}
        >
          {createMessage => <ChatForm createMessage={createMessage} />}
        </Mutation>
      </main>
    );
  }
}
