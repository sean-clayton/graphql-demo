import React from "react";

export default class ChatForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.createMessage({
      variables: {
        body: e.target.body.value
      }
    });
    e.target.reset();
  };
  render() {
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <input name="body" type="text" autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    );
  }
}
