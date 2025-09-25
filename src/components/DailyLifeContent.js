import React from 'react';
import './DailyLifeContent.css';
import dailyLife1 from '../assets/daily-life-1.png';
import dailyLife2 from '../assets/daily-life-2.png';

function DailyLifeContent() {
  return (
    <div className="daily-life-section">
      <div className="daily-life-container">
        <div className="daily-life-content">
          {/* Left Side - daily-life-1.png */}
          <div className="daily-life-left">
            <img 
              src={dailyLife1} 
              alt="Daily Life Planning" 
              className="daily-life-image"
            />
          </div>

          {/* Right Side - daily-life-2.png */}
          <div className="daily-life-right">
            <img 
              src={dailyLife2} 
              alt="Daily Life Management" 
              className="daily-life-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyLifeContent;
