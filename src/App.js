import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import SubmissionSuccess from './SubmissionSuccess'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className='navbar-nav mx-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to="/">Home</Link>
            </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/about">About</Link>
            </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/skills">Skills</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/successful" element={<SubmissionSuccess />}/>
      </Routes>
    </Router>
  )
}

export default App
