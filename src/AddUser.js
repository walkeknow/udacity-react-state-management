import React from 'react'

export default function AddUser(props) {
  return (
    <div>
      <form onSubmit={event => props.handleSubmit(event)}>
        <label>
          First Name:
          <input value={props.firstName} onChange={(event) => props.addUserDetails(event.target.value, 'firstName')}></input>
        </label>
        <br />
        <label>
          Last Name:
          <input value={props.lastName} onChange={(event) => props.addUserDetails(event.target.value, 'lastName')}></input>
        </label>
        <br />
        <label>
          Username:
          <input value={props.username} onChange={(event) => props.addUserDetails(event.target.value, 'username')}></input>
        </label>
        <br />
        <button type="submit" disabled={props.inputIsEmpty()}>Submit</button>
      </form>
    </div>
  )
}
