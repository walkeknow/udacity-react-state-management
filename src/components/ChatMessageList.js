import React from 'react'
import ChatMessage from './ChatMessage'

export default function ChatMessageList({messages, sender}) {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <ChatMessage
        message={message}
        key={index}
        sender={sender}></ChatMessage>
      ))}
    </ul>
  )
}
