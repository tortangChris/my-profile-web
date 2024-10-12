import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import ContactSubmission from './ContactSubmission'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/successful" element={<ContactSubmission />}/>
      </Routes>
    </Router>
  )
}

export default App
