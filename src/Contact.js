import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const [name, inputName] = useState('')
    const [email, inputEmail] = useState('')
    const [message, inputMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate("/successful", {state: { name, email, message } } )

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
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
