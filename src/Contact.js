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
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
        <h2>Contact Me</h2>
        </div>
        <div className='card-body'> 
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label>Name</label>
                <input type="text" id="name" value={name} onChange={(e) => inputName(e.target.value)} required />
            </div>
            <div className='mb-3'>
                <label>Email</label>
                <input type="email" id="email" value={email} onChange={(e) => inputEmail(e.target.value)} required />
            </div>
            <div className='mb-3'>
                <label>Message</label>
                <textarea id="massage" rows="5" value={message} onChange={(e) => inputMessage(e.target.value)} required />
            </div>
            <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    
  )
}

export default Contact
