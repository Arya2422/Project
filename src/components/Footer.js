// src/components/Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white text-center">
      <div className="mb-4">
        <a href="#" className="mx-3">
          <FaFacebook size={30} />
        </a>
        <a href="#" className="mx-3">
          <FaTwitter size={30} />
        </a>
        <a href="#" className="mx-3">
          <FaInstagram size={30} />
        </a>
      </div>
      <p>&copy; 2024 EarthOne. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
