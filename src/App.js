import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                {navItems.map((item) => (
                  <Nav.Link
                    key={item.name}
                    as={Link}
                    to={item.path}
                    onClick={() => setActiveLink(item.name.toLowerCase())}
                    className={activeLink === item.name.toLowerCase() ? 'active' : ''}
                    style={{ borderBottom: activeLink === item.name.toLowerCase() ? '3px solid #FFC107' : 'none' }}
                  >
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
