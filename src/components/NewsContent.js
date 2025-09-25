import React from 'react';
import './NewsContent.css';
import news1 from '../assets/news-1.png';
import news2 from '../assets/news-2.png';

function NewsContent() {
  return (
    <div className="news-section">
      <div className="news-container">
        <div className="news-content">
          {/* Left Side - news-1.png */}
          <div className="news-left">
            <img 
              src={news1} 
              alt="News Analytics" 
              className="news-image"
            />
          </div>

          {/* Right Side - news-2.png */}
          <div className="news-right">
            <img 
              src={news2} 
              alt="Financial News" 
              className="news-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsContent;
