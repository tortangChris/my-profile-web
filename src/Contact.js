import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

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
      <div className='card bg-dark text-warning' style={{ maxWidth: '800px', margin: 'auto' }}>
        <div className='card-header'>
        <h2 className='text-center'>Contact Me</h2>
        </div>
        <div className='card-body'> 
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type="text" id="name" className='form-control' value={name} onChange={(e) => inputName(e.target.value)} required />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type="email" id="email" className='form-control' value={email} onChange={(e) => inputEmail(e.target.value)} required />
            </div>
            <div className='mb-3'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea id="massage" className='form-control' rows="5" value={message} onChange={(e) => inputMessage(e.target.value)} required />
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className='btn btn-warning'>Submit</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    
  )
}

export default Contact
