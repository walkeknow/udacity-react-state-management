import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/ChatWindow'

class App extends Component {

  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  addMessage = (sender, message) => {
    const newMessage = {username: sender.username, text: message};
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
    }))
  }

  users = [{ username: 'Amy' }, { username: 'John' }];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow
            sender={this.users[0]}
            messages={this.state.messages}
            addMessage={this.addMessage}></ChatWindow>
          <ChatWindow
            sender={this.users[1]}
            messages={this.state.messages}
            addMessage={this.addMessage}></ChatWindow>
        </div>
      </div>
    );
  }
}

export default App;