import React from 'react'

export default function DisplayUsers(props) {
  return (
    <div>
      <button onClick={() => props.toggleGamesPlayed()}>{props.buttonText}</button>
      <br></br>
      <ol>{props.users.map(user => (
        <li key={Object.keys(user)[0]}>{Object.keys(user)[0]} played {props.gamesPlayed(user)} games</li>
      ))}</ol>  
    </div>
  )
}
