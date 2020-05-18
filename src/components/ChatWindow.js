import React, { Component } from 'react'
import ChatMessageList from './ChatMessageList'
import TypeMessage from './TypeMessage'

export default class ChatWindow extends Component {
  state = {
    newMessage: '',
  }

  handleTyping = (message) => {
    this.setState(() => ({
      newMessage: message
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      this.props.addMessage(this.props.sender, prevState.newMessage);
      return { newMessage: '' }
    })
  }

  isDisabled = () => this.state.newMessage === '';

  render() {
    const { messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.sender.username}</div>
        <ChatMessageList
          sender={this.props.sender}
          messages={messages}></ChatMessageList>
        <TypeMessage
          isDisabled={this.isDisabled}
          handleSubmit={this.handleSubmit}
          handleTyping={this.handleTyping}
          newMessage={this.state.newMessage}
        ></TypeMessage>
      </div>
    )
  }
}
