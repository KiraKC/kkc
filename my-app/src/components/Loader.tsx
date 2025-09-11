// Loader.tsx
import React from 'react';
import './Loader.css';
import filmOperatorImage from '../images_gifs/film-operator.gif'; // Import the image

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <img src={filmOperatorImage} alt="Loading..." />
      <div className="loader-grain"></div> {/* Add  film grain effect */}
      <div className="loader-scratch"></div> {/* Add  film scratch effect */}
    </div>
  );
};

export default Loader;

