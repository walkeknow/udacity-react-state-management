import React from 'react'

function ChatMessage({index, message, sender}) {
  return (
    <div>
      <li
        key={index}
        className={
          message.username === sender.username ? 'message sender' : 'message recipient'
        }
      >
        <p>{`${message.username}: ${message.text}`}</p>
      </li>
    </div>
  )
}

export default ChatMessage
