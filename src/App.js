import React, { useState } from 'react';
import './App.css';
import img1 from './rocket.jpg';
import ParticleBg from './components/ParticleBg';

// Removed unused imports: Routes, Route, Link, NextPage

// Define the App component
function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <ParticleBg />

      <div className="App">
        <header className="App-header">
          <p className="text">Hover over the rocket fire to launch it</p>
          <img
            src={img1}
            alt=" "
            className={`rocket ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

          {isHovered && (
            <div className="centered-content">
              <p className="hover-text">Hello Everyone!</p>
            </div>
          )}
        </header>
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
