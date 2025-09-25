import React, { useState } from 'react';
import './VideoSection.css';
import videoImage from '../assets/video.png';
import video from '../assets/video.mp4';

const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="video-section">
      <div className="video-container">
        <h2 className="video-title">ATLAS <span className="video-title-experience">Experience</span></h2>
        <div className="video-image-container">
          <div className={`video-wrapper ${isLoading ? 'loading' : ''}`}>
          <video
            className="atlas-video"
            controls
            poster={videoImage}
            preload="metadata"
            onLoadStart={handleLoadStart}
            onCanPlay={handleCanPlay}
            onLoadedData={handleLoadedData}
          >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
