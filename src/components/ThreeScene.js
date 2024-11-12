// src/components/ThreeScene.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null); // Reference to the div where the canvas will be mounted

  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // Attach the renderer to the DOM

    // Create the Earth sphere geometry and material
    const geometry = new THREE.SphereGeometry(5, 64, 64); // Sphere radius, width, and height segments
    const texture = new THREE.TextureLoader().load('https://www.nasa.gov/sites/default/files/thumbnails/earth-from-space.jpg?itok=EryiFP0t'); // Full Earth image URL
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Set the camera position
    camera.position.z = 15;

    // Function to handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Handle scroll and adjust Earth's rotation
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      earth.rotation.y = scrollPosition * 0.001; // Rotate the Earth based on the scroll position (adjust speed)
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop to render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera); // Re-render the scene
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('scroll', handleScroll);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeScene;
