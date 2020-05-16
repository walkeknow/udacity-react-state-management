import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    displayText: ''
  };

  mirrorInput = (query) => {
    this.setState(() => ({
      displayText: query
    }))
  }

  render() {
    const { displayText } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <input
          onChange={(event) => { this.mirrorInput(event.target.value) }}
          type="text">
        </input>
        {displayText.length !== 0 && <p>{this.state.displayText}</p>}
      </div>
    );
  }
}

export default App;
