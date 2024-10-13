import React from 'react'
import { useLocation } from 'react-router-dom'

const SubmissionSuccess = () => {
  const location = useLocation()
  const { name, email, message } = location.state || {};

  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-body'>
          <div className='text-center'>
            <h1 className='text-center'>Thank You, {name}!</h1>
            <p>Your message has been sent successfully!</p>
            <hr/>
            <h5>Submitted Information</h5>
            <p><strong>Name:</strong> {name} </p>
            <p><strong>Email:</strong> {email} </p>
            <p><strong>Message:</strong> {message} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmissionSuccess
