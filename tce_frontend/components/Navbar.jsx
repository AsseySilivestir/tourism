import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

/**
 * Navigation component with responsive design and smooth scrolling
 * @param {string} activeSection - The currently active section for highlighting
 */
const Navbar = ({ activeSection }) => {
  // State to track if navbar should have solid background
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll events and update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BSNavbar 
      expand="lg" 
      fixed="top" 
      className={scrolled ? "navbar-scrolled" : ""}
    >
      <Container>
        <BSNavbar.Brand href="#home" className="fw-bold">
          Tanzania Corridors Explorers
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                to="tours" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className={`nav-link ${activeSection === 'tours' ? 'active' : ''}`}
              >
                Tour Packages
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                to="gallery" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
              >
                Gallery
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                to="testimonials" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              >
                Testimonials
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                to="blog" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
              >
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;