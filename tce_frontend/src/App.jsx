import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './../components/Navbar.jsx';
import Hero from './../components/Hero';
import About from './../components/About';
import Tours from './../components/Tours';
import Gallery from './../components/Gallery';
import Testimonials from './../components/Testimonials';
import Blog from './../components/Blog';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import WhatsAppButton from './../components/WhatsAppButton';

/**
 * Main App component that renders all sections of the Tanzania Corridors Explorers website
 * Manages the active section state for navigation highlighting
 */
function App() {
  // State to track the active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');

  // Effect to handle scroll events and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tours', 'gallery', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Tours />
      <Gallery />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;