import React from 'react';
import './HealthContent.css';
import health1 from '../assets/health-1.png';
import health2 from '../assets/health-2.png';

function HealthContent() {
  return (
    <div className="health-section">
      <div className="health-container">
        <div className="health-content">
          {/* Left Side - health-1.png */}
          <div className="health-left">
            <img 
              src={health1} 
              alt="Health Monitoring" 
              className="health-image"
            />
          </div>

          {/* Right Side - health-2.png */}
          <div className="health-right">
            <img 
              src={health2} 
              alt="Health Analytics" 
              className="health-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthContent;
