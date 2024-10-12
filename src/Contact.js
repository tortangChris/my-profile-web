import React, { useState } from 'react'

const Contact = () => {
    const [name, inputName] = useState('')
    const [email, inputEmail] = useState('')
    const [message, inputMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Name", name)
        console.log("Email", email)
        console.log("Message", message)

    }

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" id="name" value={name} onChange={(e) => inputName(e.target.value)} required />
        </div>
        <div>
            <label>Email</label>
            <input type="email" id="email" value={email} onChange={(e) => inputEmail(e.target.value)} required />
        </div>
        <div>
            <label>Message</label>
            <textarea id="massage" rows="5" value={message} onChange={(e) => inputMessage(e.target.value)} required />
        </div>
      </form>
    </div>
  )
}

export default Contact
