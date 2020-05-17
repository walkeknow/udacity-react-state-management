import React, { Component } from 'react'

export class AddUser extends Component {
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <label>
            First Name:
          <input onChange={(event) => this.props.addUserDetails(event.target.value, 'firstName')}></input>
          </label>
          <br />
          <label>
            Last Name:
          <input onChange={(event) => this.props.addUserDetails(event.target.value, 'lastName')}></input>
          </label>
          <br />
          <label>
            Username:
          <input onChange={(event) => this.props.addUserDetails(event.target.value), 'username'}></input>
          </label>
          <br />
          {(this.props.firstName.length || this.props.lastName.length || this.props.username.length) === 0
          ? <button type="submit" disabled>Submit</button>
          : <button type="submit">Submit</button>
          }
          
        </form>
      </div>
    )
  }
}

export default AddUser
