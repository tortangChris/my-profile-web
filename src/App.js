import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import SubmissionSuccess from './SubmissionSuccess';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <Router>
      <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <ul className='navbar-nav mx-auto'>
            {navItems.map(item => (
              <li className='nav-item' key={item.name}>
                <Link
                  className='nav-link'
                  to={item.path}
                  onClick={() => setActiveLink(item.name.toLowerCase())}
                  style={{ borderBottom: activeLink === item.name.toLowerCase() ? '3px solid #FFC107' : 'none' }}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/successful" element={<SubmissionSuccess />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
