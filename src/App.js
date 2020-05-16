import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    score: numCorrect,
    questions: numQuestions,
    values: {
      value1: value1,
      value2: value2,
      value3: value3
    },
    proposedAnswer
  };

  checkAnswer = (answer) => {
    this.setState(previousState => {
      let newScore = 0
      const value1 = previousState.values.value1;
      const value2 = previousState.values.value2;
      const value3 = previousState.values.value3;
      const proposedAnswer = previousState.proposedAnswer;
      if ((value1 + value2 + value3 === proposedAnswer && answer) ||
        (value1 + value2 + value3 !== proposedAnswer && !answer)) {
        newScore += 1
      }
      const newValue1 = Math.floor(Math.random() * 100);
      const newValue2 = Math.floor(Math.random() * 100);
      const newValue3 = Math.floor(Math.random() * 100);
      return ({
        score: previousState.score + newScore,
        questions: previousState.questions + 1,
        values: {
          value1: newValue1,
          value2: newValue2,
          value3: newValue3
        },
        proposedAnswer: Math.floor(Math.random() * 3) + newValue1 + newValue2 + newValue3
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.values.value1} + ${this.state.values.value2} + ${this.state.values.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.score}/{this.state.questions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
