import React from 'react';
import './PrivacySection.css';
import privacyImage1 from '../assets/privacy-1.png';
import privacyImage2 from '../assets/privacy-2.png';

function PrivacySection() {
  return (
    <div className="privacy-section">
      <div className="privacy-container">
        <h2 className="privacy-title">Intelligence Built for <span className="privacy-title-highlight">Privacy</span></h2>
        <div className="privacy-images-container">
          <div className="privacy-image-wrapper">
            <img 
              src={privacyImage1} 
              alt="Privacy Feature 1" 
              className="privacy-image"
            />
          </div>
          <div className="privacy-image-wrapper">
            <img 
              src={privacyImage2} 
              alt="Privacy Feature 2" 
              className="privacy-image"
            />
          </div>
        </div>
        <div className="privacy-footer">
          <p className="privacy-text">
          *200x more GPU Cores than iPhone 17 Pro.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacySection;
