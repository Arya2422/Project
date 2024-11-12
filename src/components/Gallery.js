// src/components/Gallery.js

import React from 'react';
import ReactPlayer from 'react-player';

const Gallery = () => {
  return (
    <section
      className="flex items-center justify-center py-20 px-5 bg-gray-100 text-center"
      style={{ minHeight: '100vh' }} // Ensure section takes full viewport height
    >
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
