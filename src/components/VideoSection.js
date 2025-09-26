import React, { useState } from 'react';
import './VideoSection.css';
import videoImage from '../assets/video.png';

const VideoSection = () => {
  const [showLoading, setShowLoading] = useState(false);

  const handleVideoClick = () => {
    setShowLoading(true);
    // Hide loading message after 3 seconds
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  };

  return (
    <div className="video-section">
      <div className="video-container">
        <h2 className="video-title">ATLAS <span className="video-title-experience">Experience</span></h2>
        <div className="video-image-container">
          <div className="video-wrapper" onClick={handleVideoClick}>
            <img 
              src={videoImage} 
              alt="Coming Soon" 
              className="video-poster"
              style={{ cursor: 'pointer' }}
            />
            {showLoading && (
              <div className="loading-overlay">
                <div className="loading-message">
                  <div className="loading-spinner"></div>
                  <p>Coming Soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
