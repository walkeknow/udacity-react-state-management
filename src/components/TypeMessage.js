import React from 'react'

export default function TypeMessage({
  isDisabled, handleTyping, handleSubmit, newMessage
}) {
  return (
    <div>
      <form className="input-group" onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="form-control" 
        placeholder="Enter your message..." 
        onChange={(event) => handleTyping(event.target.value)} 
        value={newMessage}
        />
        <div className="input-group-append">
          <button type="submit" className="btn submit-button" disabled={isDisabled()}>
            SEND
            </button>
        </div>
      </form>
    </div>
  )
}
