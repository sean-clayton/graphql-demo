import React from "react";

const VISIBLE_MESSAGES = 10;

export default class ChatMessages extends React.Component {
  state = {
    messages: this.props.data.allMessages.slice(0, VISIBLE_MESSAGES) || []
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.newMessage) {
      if (
        prevState.messages.some(
          m => m.id === nextProps.newMessage.Message.node.id
        )
      ) {
        return prevState;
      } else {
        const previousMessages = prevState.messages;
        return {
          messages: [
            ...previousMessages,
            nextProps.newMessage.Message.node
          ].slice(-VISIBLE_MESSAGES)
        };
      }
    }
    return prevState;
  }
  render() {
    return (
      <ul className="chat-messages-list">
        {this.state.messages.map(({ id, body, createdAt }) => (
          <li key={id}>
            <span>{body}</span>
            <time>{new Date(Date.parse(createdAt)).toLocaleTimeString()}</time>
          </li>
        ))}
      </ul>
    );
  }
}
