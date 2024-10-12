import React from 'react'
import { useLocation } from 'react-router-dom'

const SubmissionSuccess = () => {
  const location = useLocation()
  const { name, email, message } = location.state || {};

  return (
    <div>
      <h1>Thank You,{name}</h1>
      <p>Your message has been sent successfully!</p>

      <h5>Submitted Information</h5>
      <p><strong>Name:</strong> {name} </p>
      <p><strong>Email:</strong> {email} </p>
      <p><strong>Message:</strong> {message} </p>
    </div>
  )
}

export default SubmissionSuccess
