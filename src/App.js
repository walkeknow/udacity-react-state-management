import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser'
import DisplayUsers from './DisplayUsers'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    users: [],
    buttonText: 'Hide Games Played',
    showGames: true
  }
  handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted")
    this.setState((previousState) => {
      const firstName = previousState.firstName;
      const lastName = previousState.lastName;
      const username = previousState.username;
      const existingUsers = previousState.users;
      for (const existingUser of existingUsers) {
        if (username === Object.keys(existingUser)[0]) {
          alert("username already taken!")
          return {
            firstName: '',
            lastName: '',
            username: '',
            users: existingUsers
          }
        }
      }
      const user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        gamesPlayed: 0
      }
      const userObj = {}
      userObj[username] = user
      return {
        firstName: '',
        lastName: '',
        username: '',
        users: previousState.users.concat(userObj)
      }
    })
  }
  addUserDetails = (inputValue, inputType) => {
    if (inputType === 'firstName') {
      this.setState(() => ({
        firstName: inputValue
      }))
    }
    else if (inputType === 'lastName') {
      this.setState(() => ({
        lastName: inputValue
      }))
    }
    else {
      this.setState(() => ({
        username: inputValue
      }))
    }
  }
  inputIsEmpty = () => (
    (this.state.firstName && this.state.lastName && this.state.username) === ""
  )
  toggleGamesPlayed = () => {
    this.setState((previousState) => {
      if (previousState.showGames) return { showGames: false };
      return { showGames: true }
    })
  }
  gamesPlayed = (user) => {
    if (this.state.showGames) {
      let gamesPlayed = 0
      for (const [, value] of Object.entries(user)) {
        gamesPlayed = value.gamesPlayed;
      }
      return gamesPlayed
    }
    return '*/'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser
          handleSubmit={this.handleSubmit}
          addUserDetails={this.addUserDetails}
          users={this.state.users}
          inputIsEmpty={this.inputIsEmpty}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          username={this.state.username}></AddUser>
        {/* {this.state.users.length !== 0 && <DisplayUsers></DisplayUsers>} */}
        <DisplayUsers
          buttonText={this.state.buttonText}
          toggleGamesPlayed={this.toggleGamesPlayed}
          users={this.state.users}
          gamesPlayed={this.gamesPlayed}></DisplayUsers>
      </div>
    );
  }
}

export default App;
