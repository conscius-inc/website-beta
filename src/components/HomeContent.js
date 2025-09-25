import React from 'react';
import './HomeContent.css';
import home1 from '../assets/home-1.png';
import home2 from '../assets/home-2.png';

function HomeContent() {
  return (
    <div className="home-section">
      <div className="home-container">
        <div className="home-content">
          {/* Left Side - home-1.png */}
          <div className="home-left">
            <img 
              src={home1} 
              alt="Smart Home Control" 
              className="home-image"
            />
          </div>

          {/* Right Side - home-2.png */}
          <div className="home-right">
            <img 
              src={home2} 
              alt="Home Automation" 
              className="home-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
