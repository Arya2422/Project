import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Hero from './Hero';
import Impact from './Impact';
import About from './About';
import Fellow from './Fellow';

const RotatingEarthWithGallery = () => {
  const [rotation, setRotation] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
      // Slower rotation (only 180 degrees for full scroll)
      setRotation(progress * 180);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    cardContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    card: {
      background: 'linear-gradient(to bottom, #f8f8f8, #eaeaea)',
      padding: '20px',
      borderRadius: '15px',
      width: '300px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      zIndex: 10,
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      marginBottom: '10px',
    },
    title: {
      fontSize: '1.5em',
      fontWeight: '500',
      margin: '0',
      color: '#333',
    },
    paragraph: {
      fontSize: '0.9em',
      color: '#666',
      margin: '15px 0',
    },
    button: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '0.9em',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#555',
    },
  };

  const handleJoinAllianceClick = () => {
    navigate('/contact'); // Navigate to the Contact page using useNavigate
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center flex-col">
      {/* Fixed Earth Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full transition-transform duration-200 ease-linear"
          style={{
            transform: `rotate(${rotation}deg)`,
            background:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkCMxsgUhZP29gMG8r8xKE2wxvo-HYkJeWQ&s") center center / cover no-repeat',
          }}
        >
          {/* Atmospheric overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.4) 70%)',
              mixBlendMode: 'overlay',
            }}
          />
        </div>

        {/* Darkening overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(2px)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center p-8 text-center text-white">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Earth One</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Earth One is a global alliance of influential, generous, and daring leaders collaborating to catalyze a new approach to social and environmental stewardship.
            </p>
          </div>
        </section>

    

        {/* About Section */}
 <About/>

        <section className="min-h-screen flex items-center justify-center p-8 backdrop-blur-sm text-white">
          <div className="max-w-4xl mx-auto bg-black bg-opacity-40 p-8 rounded-xl text-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </div>
        </section>

        <Hero/>
      <br/>
      <br/>
      <br/>
      <br/>
          <div className="max-w-4xl mx-auto bg-black bg-opacity-40 p-8 rounded-xl text-center">
          <Impact/>
          </div>
      
      <br/>
      <br/>
      <br/>
      <br/>
          <div className="max-w-4xl mx-auto bg-black bg-opacity-40 p-8 rounded-xl text-center">
         <Fellow/>
          </div>
     

        {/* Join the Alliance Card */}
        <section className="flex items-center justify-center min-h-screen">
          <div style={styles.cardContainer}>
            <div style={styles.card}>
              <div style={styles.header}>
                <div style={styles.icon}>
                  {/* SVG icon with wavy lines */}
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="20" fill="#E0E0E0" />
                    <path d="M10,15 C12,18 15,20 20,20 C25,20 28,18 30,15" stroke="#333" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <h1 style={styles.title}>Join the Alliance.</h1>
              </div>
              <p style={styles.paragraph}>
                Receive invitations to upcoming events, connect with our global community, and share your gifts.
              </p>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                onClick={handleJoinAllianceClick} // Add click handler to navigate
              >
                JOIN THE ALLIANCE
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Progress Indicator */}
      <div
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-white"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
};

export default RotatingEarthWithGallery;
