import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  const [showCarousel, setShowCarousel] = useState(false); 
  const [selectedCountry, setSelectedCountry] = useState(null); 

  const countries = [
    { name: 'USA', x: 30, y: 60, images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmk1nNWGWRAdswUL2AOjkdFaZ3MSRGuHtvg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJ4XSoHpJ0Ghx5I7JRRsiMwlfZC_1nnvOJA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezKSQlXqbbrUTSWGJqYYnAgYpNpEDP-LKJQ&s'] },
    { name: 'India', x: 68, y: 40, images: ['https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1727352314555', 'https://www.citybit.in/wp-content/uploads/2024/05/Places-to-Visit-Gujarat-1024x576.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ixFoPW9fHXwC8aF_KKzqbme_LUW8ktE-Ww&s'] },
    { name: 'Australia', x: 80, y: 72, images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzWPD10zOrxgD7LUmOoo7plbbILwXXfwksw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNaBMTBT7X7kQAgd-DJAzZs7H-vJRtmsFCA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIXOwm2Kqgo2aQWFFbdIxfWwklsWXzu-5tg&s'] },
  ];

  // Toggle body scroll based on showCarousel state
  useEffect(() => {
    if (showCarousel) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when carousel is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when carousel is closed
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up on unmount or state change
    };
  }, [showCarousel]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
    setSelectedCountry(null);
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1200px-World_map_blank_without_borders.svg.png?20220119094514)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1c1c1c',
      }}
    >
      {countries.map((country, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${country.y}%`,
            left: `${country.x}%`,
            cursor: 'pointer',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            textAlign: 'center',
          }}
          onClick={() => handleCountryClick(country)}
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              borderRadius: '50%',
              padding: '20px',
              border: '2px dotted white',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.borderWidth = '4px')}
            onMouseLeave={(e) => (e.target.style.borderWidth = '2px')}
          >
            <span
              style={{
                color: 'red',
                opacity: 1,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '30px',
              }}
              className="plus-symbol"
            >
              +
            </span>
          </div>

          <span
            style={{
              display: 'block',
              marginTop: '8px',
              fontSize: '16px',
              color: 'white',
            }}
          >
            {country.name}
          </span>
        </div>
      ))}

      {showCarousel && selectedCountry && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '20px',
            zIndex: 1000,
            width: '80vw',
            height: '80vh',
            borderRadius: '10px',
            overflowY: 'scroll',
          }}
        >
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Latest Images from {selectedCountry.name}</h2>
          <Carousel interval={3000}> {/* Auto-slide every 3 seconds */}
            {selectedCountry.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ objectFit: 'cover', height: '60vh' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <button
            onClick={handleCloseCarousel}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            X
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
