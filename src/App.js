import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import './App.css';
import RotatingEarth from './components/RotatingEarth';
import Contact from './components/Contact';


const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show the scroll-to-top button after scrolling 100px down
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Scroll to top smoothly on logo click
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RotatingEarth />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
