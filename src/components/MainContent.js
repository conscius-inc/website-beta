import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="hero-section">
        <div className="atlas-title">ATLAS</div>
        <div className="atlas-subtitle">Private and Autonomous Personal AI</div>
        <div className="cta-buttons">
          <button className="explore-btn">
            Explore
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={13}
    viewBox="0 0 14 13"
    fill="none"
  >
    <path
      d="M1.9 13L0.5 11.6L10.1 2H1.5V0H13.5V12H11.5V3.4L1.9 13Z"
      fill="#F9FDFF"
    />
  </svg>
          </button>
          <button className="preorder-btn">
            Pre-Order for $99
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
