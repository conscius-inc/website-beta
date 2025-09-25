import React from 'react';
import './MoneyContent.css';
import money1 from '../assets/money-1.png';
import money2 from '../assets/money-2.png';

function MoneyContent() {
  return (
    <div className="money-section">
      <div className="money-container">
        <div className="money-content">
          {/* Left Side - money-1.png */}
          <div className="money-left">
            <img 
              src={money1} 
              alt="Financial Planning" 
              className="money-image"
            />
          </div>

          {/* Right Side - money-2.png */}
          <div className="money-right">
            <img 
              src={money2} 
              alt="Financial Analytics" 
              className="money-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyContent;
